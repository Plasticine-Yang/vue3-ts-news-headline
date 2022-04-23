import { NewsType } from './enums';
import { INewsState } from './typing';

const state: INewsState = {
  currentType: NewsType.TOP,
  newsList: {
    hasMore: true,
    isLoading: false,
    pageNum: 0,
    count: 10,
    news: [],
  },
};

export default state;
