import { INewsData } from '@/api/newsList/typing';
import { NewsType } from './enums';

export interface INewsList {
  hasMore: boolean;
  isLoading: boolean;
  pageNum: number;
  count: number;
  news: Partial<INewsData[]>;
}

export interface INewsState {
  currentType: NewsType;
  newsList: INewsList;
}
