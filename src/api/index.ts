import { API } from '@/config/apiConfig';
import { axiosGet } from '@/utils/http';
import { NewsListTypeParams } from './typing';

export async function getNewsList(type: NewsListTypeParams) {
  const data = await axiosGet(API.GET_NEWS_LIST, { type });

  // 在前端将数据分页 -- 分成每页 10 条数据
  let i = 0;
  const resultData = data.result.data;
  const pageData = [];

  while (i < resultData.length) {
    pageData.push(resultData.slice(i, (i += 10)));
  }

  console.log(resultData, pageData);
  return pageData;
}
