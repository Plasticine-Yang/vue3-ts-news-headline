import { IHeaderInfo } from '#/header';
import { headerRouteInfo } from '@/router/routeInfo';
import type { Ref } from 'vue';
import _ from 'lodash';
import useHomeStore from '@/store/home';

/**
 * 根据 routeName 到 headerRouteInfo 中查找相应的 header 信息
 * @param routeName route.name
 * @returns headerInfo
 */
export function useHeaderInfo(routeName: string): IHeaderInfo | undefined {
  const headerInfo = headerRouteInfo.find((item: IHeaderInfo) => item.name === routeName);

  return headerInfo;
}

/**
 * 给 imgRefs 中的所有图片绑定 load 事件，当 load 完毕后将图片的 opacity 设置为 1
 * @param imgRefs 图片 refs
 */
export function useImgShow(imgRefs: Ref<null | HTMLElement>[]): void {
  imgRefs.forEach((item) => {
    const oImg = item.value;
    if (oImg) {
      oImg.addEventListener('load', () => {
        oImg.style.opacity = '1';
      });
    }
  });
}

/**
 * @description 当滚动到距离新闻列表底部 30px 时开始加载下一页新闻列表
 */
export function useLoadingMore(el: Ref<HTMLElement | null>) {
  const homeStore = useHomeStore();
  let newsListEl: HTMLElement;

  function _loadMore() {
    const listHeight = newsListEl.clientHeight;
    const scrollHeight = newsListEl.scrollHeight;
    const scrollTop = newsListEl.scrollTop;

    // 滚动到距离屏幕底部 30px 时开始加载下一页新闻
    if (listHeight + scrollTop >= scrollHeight - 30) {
      homeStore.setNewsList();
    }
  }

  // 给新闻列表添加滚动事件，并用防抖实现至少停止滚动 300ms 后才开始加载新的新闻列表
  onMounted(() => {
    newsListEl = el.value as HTMLElement;
    newsListEl.addEventListener('scroll', _.debounce(_loadMore, 300), false);
  });

  return {
    isLoading: computed(() => homeStore.newsListInfo.isLoading),
    hasMore: computed(() => homeStore.newsListInfo.hasMore),
  };
}
