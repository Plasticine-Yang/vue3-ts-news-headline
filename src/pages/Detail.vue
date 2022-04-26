<template>
  <iframe v-if="newsData" class="min-h-[100vh] w-full" :src="newsData.url" />
  <div v-else class="flex justify-center items-center min-h-[100vh]">
    <p class="text-[#aeaeae] text-2xl">新闻不存在</p>
  </div>
</template>

<script setup lang="ts">
  import { useNewsDetail } from '@/composables';

  const route = useRoute();
  const newsData = useNewsDetail(route);
</script>
