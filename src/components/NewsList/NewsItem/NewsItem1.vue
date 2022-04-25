<template>
  <div class="news-item">
    <!-- 标题 -->
    <h1>{{ newsItem.title }}</h1>
    <!-- 图片区域 -->
    <div class="news-item-image">
      <img ref="imgRef" :src="newsItem.thumbnail_pic_s" alt="" />
    </div>
    <!-- 文章信息 -- 作者、时间 -->
    <div class="flex gap-3 text-[#aeaeae] text-xs mt-2">
      <!-- 作者 -->
      <span>{{ newsItem.author_name }}</span>
      <!-- 时间 -->
      <span> {{ newsItem.date }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { INewsData } from '@/api/newsList/typing';
  import { useImgShow } from '@/composables';

  defineProps<{
    newsItem: INewsData;
  }>();

  // 获取图片 dom 元素
  const imgRef = ref<null | HTMLElement>(null);

  // mounted 的时候给图片 dom 元素绑定 load 事件监听器
  onMounted(() => {
    useImgShow([imgRef]);
  });
</script>

<style scoped>
  img {
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
