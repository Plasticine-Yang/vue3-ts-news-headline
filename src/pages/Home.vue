<template>
  <div class="home">
    <NavBar @get-news-list="handleGetNewsList" />
    <NewsList :news-list-info="homeStore.newsListInfo" />
  </div>
</template>

<script setup lang="ts">
  import { NewsType } from '@/api/newsList/typing';
  import useHomeStore from '@/store/home';
  import NavBar from '@/components/NavBar/index.vue';
  import NewsList from '@/components/NewsList/index.vue';

  const homeStore = useHomeStore();

  const handleGetNewsList = (newsType: NewsType) => {
    homeStore.setCurrentType(newsType);
    homeStore.setNewsList();
  };
</script>

<style scoped></style>
