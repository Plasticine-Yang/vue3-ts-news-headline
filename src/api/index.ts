import { API } from '@/config/apiConfig';
import { axiosGet } from '@/utils/http';
import { NewsListTypeParams } from './typing';

/**
 * 获取新闻列表
 * @param type 新闻类型 -- NewsListTypeParams 中定义了所有新闻类型
 * @param pageCount 每次加载到页面上的新闻条数
 * @returns 新闻列表数据
 */
export async function getNewsList(type: NewsListTypeParams, pageCount = 10) {
  const data = await axiosGet(API.GET_NEWS_LIST, { type });

  // 在前端将数据分页 -- 分成每页 10 条数据
  let i = 0;
  const resultData = data.result.data;
  const pageData = [];

  while (i < resultData.length) {
    pageData.push(resultData.slice(i, (i += pageCount)));
  }

  return pageData;
}
