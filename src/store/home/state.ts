import { INewsState } from './typing';

const state: INewsState = {
  currentNewsType: 'top',
  newsListInfo: {
    hasMore: true,
    isLoading: false,
    page: 1,
    pageSize: 30,
    newsList: [],
  },
};

export default state;
