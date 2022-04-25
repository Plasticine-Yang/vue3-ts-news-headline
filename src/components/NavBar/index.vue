<template>
  <nav v-active-item="{ activeClass: 'active', itemClass: 'nav-item', itemIndex: curIndex }">
    <!-- scroll-area -->
    <div class="overflow-scroll">
      <!-- 滚动栏总长度 = 每一项长度 * 有多少项，NavItem 中的每一项都是 3rem -->
      <div class="flex py-2" :style="{ width: navList.length * 3 + 'rem' }">
        <NavItem
          v-for="(item, index) in navList"
          :key="item.type"
          :item="item"
          :index="index"
          @change-item="handleChangeItem"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { navList, curIndex } from './data';
  import NavItem from './NavItem.vue';
  import { NewsType } from '@/api/newsList/typing';
  import { vActiveItem } from './derective';

  const emit = defineEmits<{
    (e: 'getNewsList', newsType: NewsType): void;
  }>();

  onMounted(() => {
    emit('getNewsList', 'top');
  });

  /**
   * @description 处理子组件 emit 的 change-item-index 事件
   */
  const handleChangeItem = (index: number, newsType: NewsType) => {
    // 更新 curIndex
    curIndex.value = index;

    // 将 item 传给父组件 Home，让 Home 去加载新闻列表
    emit('getNewsList', newsType);
  };
</script>
