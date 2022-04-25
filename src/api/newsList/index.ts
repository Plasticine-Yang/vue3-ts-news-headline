import { API } from '@/config/apiConfig';
import { axiosGet } from '@/utils/http';
import { INewsListInfo, NewsType } from './typing';
import { IApiResult } from '../typing';

/**
 * 获取新闻列表
 * @param type 新闻类型 -- NewsListTypeParams 中定义了所有新闻类型
 * @param pageCount 每次加载到页面上的新闻条数
 * @returns 新闻列表数据
 */
export async function getNewsList(type: NewsType, page = 1, pageSize = 30) {
  const apiResult = await axiosGet<IApiResult<INewsListInfo>>(API.GET_NEWS_LIST, {
    type,
    page,
    pageSize,
  });

  return apiResult.data;
}
