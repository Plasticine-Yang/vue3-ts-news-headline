<template>
  <div
    class="nav-item flex justify-center items-center h-full w-[3rem] text-[16rem]"
    @click="handleItemClick"
  >
    <span>{{ item.name }}</span>
  </div>
</template>

<script setup lang="ts">
  import { NewsType } from '@/api/newsList/typing';
  import { INavListItem } from './typing';

  const props = defineProps<{
    item: INavListItem;
    index: number;
  }>();

  const emit = defineEmits<{
    // 修改 v-active-item 的 binding.value.itemIndex 为当前组件的 props.index
    (e: 'changeItem', index: number, newsType: NewsType): void;
  }>();

  /**
   * @description 触发 changeItem 给父组件
   */
  const handleItemClick = () => {
    emit('changeItem', props.index, props.item.type);
  };
</script>

<style scoped>
  .active {
    color: #1d3557;
    font-weight: bold;
  }
</style>
