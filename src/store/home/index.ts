import { defineStore } from 'pinia';
import type { NewsType } from '@/api/newsList/typing';
import { getNewsList } from '@/api';
import state from './state';

const useHomeStore = defineStore('home', {
  state: () => state,
  actions: {
    /**
     * @description 每次切换新闻类型，都要将 state 中的信息初始化
     * @param type 新闻类型
     */
    setCurrentType(type: NewsType) {
      this.currentNewsType = type;
      this.newsListInfo = {
        hasMore: true,
        isLoading: false,
        newsList: [],
        page: 1,
        pageSize: 30,
      };
    },
    async setNewsList() {
      const { currentNewsType, newsListInfo } = this.$state;
      const { page, pageSize } = newsListInfo;

      // 不需要加载数据的情况
      if (newsListInfo.isLoading) return; // 已经在加载状态
      if (!newsListInfo.hasMore) return; // 没有数据需要加载了

      newsListInfo.isLoading = true; // 开始加载

      // 获取新闻列表
      const res = await getNewsList(currentNewsType, page, pageSize);

      this.newsListInfo.hasMore = res.hasMore;
      this.newsListInfo.newsList = [...this.newsListInfo.newsList, ...res.newsList];
      this.newsListInfo.page += 1;

      newsListInfo.isLoading = false; // 加载完毕 -- 关闭加载状态
    },
  },
});

export default useHomeStore;
