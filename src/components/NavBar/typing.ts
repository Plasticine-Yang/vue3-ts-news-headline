import { NewsType } from '@/api/newsList/typing';

/**
 * @description 导航栏菜单项的类型
 */
export interface INavListItem {
  type: NewsType;
  name: string;
}

/**
 * @description v-active-item 指令的 binding 中 value 的类型
 */
export interface IVActiveItemValue {
  activeClass: string;
  itemClass: string;
  itemIndex: number;
}

/**
 * @description v-active-item 指令的 binding 参数类型
 */
export interface IVActiveItemBinding {
  value: IVActiveItemValue;
  oldValue?: IVActiveItemValue; // 刚加载的时候，第一个 item 就没有 oldValue
}
