import { IHeaderInfo } from '#/header';
import { headerRouteInfo } from '@/router/routeInfo';

/**
 * 根据 routeName 到 headerRouteInfo 中查找相应的 header 信息
 * @param routeName route.name
 * @returns headerInfo
 */
export function useHeaderInfo(routeName: string): IHeaderInfo | undefined {
  const headerInfo = headerRouteInfo.find((item: IHeaderInfo) => item.name === routeName);

  return headerInfo;
}
