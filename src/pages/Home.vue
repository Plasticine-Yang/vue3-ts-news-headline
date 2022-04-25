<template>
  <div class="home">
    <NavBar @get-news-list="handleGetNewsList" />
  </div>
</template>

<script setup lang="ts">
  import { NewsType } from '@/api/newsList/typing';
  import NavBar from '@/components/NavBar/index.vue';
  import useHomeStore from '@/store/home';

  const homeStore = useHomeStore();

  const handleGetNewsList = (newsType: NewsType) => {
    homeStore.setCurrentType(newsType);
    homeStore.setNewsList();
  };
</script>

<style scoped></style>
