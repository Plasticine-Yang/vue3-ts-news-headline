export interface IHeaderInfo {
  name: string; // 路由的 name
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  showLeftIcon: boolean; // 是否显示左边图标
  showRightIcon: boolean; // 是否显示右边图标
  leftPath?: string; // 左边图标路由
  rightPath?: string; // 右边图标路由
}
