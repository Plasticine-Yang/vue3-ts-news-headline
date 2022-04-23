import type { Directive } from 'vue';
import { IVActiveItemBinding } from './typing';

export const vActiveItem: Directive = {
  /**
   * @description 给 itemIndex 对应的 item 添加 active 类名，表明激活了
   *
   * 由于对象解构时添加 冒号 是起别名
   * 因此不能用 value: IVActiveItemValue 的方式声明类型
   * 只能够是给解构出来的对象单独声明一个类型
   * 这就是为什么要声明一个 IVActiveItemBinding
   */
  mounted(el: HTMLElement, { value }: IVActiveItemBinding) {
    const { activeClass, itemClass, itemIndex } = value;
    // 获取所有的 item DOM 元素
    const oNavItems = el.getElementsByClassName(itemClass);
    // 找出 itemIndex 对应的那个 item 并给它添加上 activeClass 类名
    oNavItems[itemIndex].classList.add(activeClass);
  },
  /**
   * @description 将旧的 itemIndex 的 item 的 active 类名移除，并给新的 itemIndex 的 item 添加 active 类名
   */
  updated(el: HTMLElement, { value, oldValue }: IVActiveItemBinding) {
    const { activeClass, itemClass } = value;
    const oNavItems = el.getElementsByClassName(itemClass);

    // 获取旧的 item 元素 -- 移除 activeClass
    oNavItems[oldValue!.itemIndex].classList.remove(activeClass); // ts 的 ! 表示 oldValue 一定存在
    // 获取新的 item 元素 -- 添加 activeClass
    oNavItems[value.itemIndex].classList.add(activeClass);
  },
};
