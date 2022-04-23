import { IHeaderInfo } from '#/header';

export const headerRouteInfo: IHeaderInfo[] = [
  {
    name: 'Home',
    title: '新闻头条',
    rightIcon: 'fas fa-user',
    showLeftIcon: false,
    showRightIcon: true,
    rightPath: '/collection',
  },
  {
    name: 'Detail',
    title: '新闻详情',
    leftIcon: 'fas fa-arrow-left',
    rightIcon: 'fas fa-star',
    showLeftIcon: true,
    showRightIcon: true,
  },
  {
    name: 'Collection',
    title: '收藏列表',
    leftIcon: 'fas fa-arrow-left',
    showLeftIcon: true,
    showRightIcon: false,
  },
];
