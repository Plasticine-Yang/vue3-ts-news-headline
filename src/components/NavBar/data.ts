import type { INavListItem } from './typing';

// 导航栏菜单项的数据
export const navList = ref<INavListItem[]>([
  {
    type: 'top',
    name: '头条',
  },
  {
    type: 'guonei',
    name: '国内',
  },
  {
    type: 'guoji',
    name: '国际',
  },
  {
    type: 'yule',
    name: '娱乐',
  },
  {
    type: 'tiyu',
    name: '体育',
  },
  {
    type: 'junshi',
    name: '军事',
  },
  {
    type: 'keji',
    name: '科技',
  },
  {
    type: 'caijing',
    name: '财经',
  },
  {
    type: 'youxi',
    name: '游戏',
  },
  {
    type: 'qiche',
    name: '汽车',
  },
  {
    type: 'jiankang',
    name: '健康',
  },
]);

// 当前激活的导航栏菜单下标
export const curIndex = ref(0);
