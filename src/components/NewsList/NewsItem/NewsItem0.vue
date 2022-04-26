<template>
  <div class="news-item">
    <router-link :to="`/detail/${newsItem.uniquekey}/${pageFrom}`">
      <!-- 标题 -->
      <h1>{{ newsItem.title }}</h1>
      <!-- 文章信息 -- 作者、时间 -->
      <div class="flex gap-3 text-[#aeaeae] text-xs mt-2">
        <!-- 作者 -->
        <span>{{ newsItem.author_name }}</span>
        <!-- 时间 -->
        <span> {{ newsItem.date }} </span>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { INewsData } from '@/api/newsList/typing';
  import type { PageFrom } from './typing';

  defineProps<{
    newsItem: INewsData;
    pageFrom: PageFrom;
  }>();
</script>
