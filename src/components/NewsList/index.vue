<template>
  <div class="news-list">
    <template v-for="item in newsListInfo.newsList">
      <!-- 没有图片 -->
      <NewsItem0 v-if="item && !item.thumbnail_pic_s" :key="item.uniquekey" :news-item="item" />
      <!-- 有一张图片 -->
      <NewsItem1
        v-else-if="item && !item.thumbnail_pic_s02"
        :key="item.uniquekey"
        :news-item="item"
      />
      <!-- 有两张图片 -->
      <NewsItem2
        v-else-if="item && !item.thumbnail_pic_s03"
        :key="item.uniquekey"
        :news-item="item"
      />
      <!-- 有三张图片 -->
      <NewsItem3 v-else-if="item" :key="item.uniquekey" :news-item="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import { INewsListInfo } from '@/store/home/typing';
  import NewsItem0 from './NewsItem/NewsItem0.vue';
  import NewsItem1 from './NewsItem/NewsItem1.vue';
  import NewsItem2 from './NewsItem/NewsItem2.vue';
  import NewsItem3 from './NewsItem/NewsItem3.vue';

  defineProps<{
    newsListInfo: INewsListInfo;
  }>();
</script>

<style scoped>
  .news-list img {
    opacity: 0;
  }
</style>
