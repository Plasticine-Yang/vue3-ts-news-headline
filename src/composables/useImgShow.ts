import { Ref } from 'vue';

/**
 * 给 imgRefs 中的所有图片绑定 load 事件，当 load 完毕后将图片的 opacity 设置为 1
 * @param imgRefs 图片 refs
 */
export function useImgShow(imgRefs: Ref<null | HTMLElement>[]): void {
  imgRefs.forEach((item) => {
    const oImg = item.value;
    if (oImg) {
      oImg.addEventListener('load', () => {
        oImg.style.opacity = '1';
      });
    }
  });
}
