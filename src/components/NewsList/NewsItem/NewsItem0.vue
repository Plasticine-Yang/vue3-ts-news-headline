<template>
  <div class="news-item">
    <!-- 标题 -->
    <h1>{{ newsItem.title }}</h1>
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

  defineProps<{
    newsItem: INewsData;
  }>();
</script>

<style scoped></style>
