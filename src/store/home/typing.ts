import { INewsData, NewsType } from '@/api/newsList/typing';

export interface INewsListInfo {
  /**
   * @description 是否有更多数据
   */
  hasMore: boolean;
  /**
   * @description 是否正在加载
   */
  isLoading: boolean;
  /**
   * @description 第几页
   */
  page: number;
  /**
   * @description 每页多少条数据
   */
  pageSize: number;
  /**
   * @description 新闻列表
   */
  newsList: Partial<INewsData[]>;
}

export interface INewsState {
  /**
   * @description 当前新闻类型
   */
  currentNewsType: NewsType;
  /**
   * @description 新闻列表信息
   */
  newsListInfo: INewsListInfo;
}
