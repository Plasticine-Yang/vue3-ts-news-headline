<template>
  <header class="fixed top-0 left-0 w-full h-10 bg-[#1D3557] text-[#F1FAEE]">
    <!-- header 左边按钮 -->
    <div class="icon-area left-0">
      <i
        v-if="headerInfo.showLeftIcon"
        :class="`iconfont ${headerInfo.leftIcon}`"
        @click="goBackPage"
      ></i>
    </div>
    <h1 class="leading-10 text-center">{{ headerInfo.title }}</h1>
    <!-- header 右边按钮 -->
    <div class="icon-area right-0">
      <!-- 新闻详情页的 header -->
      <!-- 新闻详情页右边的按钮是收藏新闻 -->
      <i
        v-if="headerInfo.showRightIcon && headerInfo.name === 'Detail'"
        :class="`iconfont ${headerInfo.rightIcon}`"
        @click="handleFollowClick"
      ></i>
      <!-- 新闻头条首页 -->
      <!-- 头条首页右边的按钮是一个路由，需要跳转 仅当路由存在才会显示 -->
      <router-link
        v-else-if="headerInfo.showRightIcon && headerInfo.rightPath && headerInfo.name !== 'Detail'"
        :to="headerInfo.rightPath"
      >
        <i :class="`iconfont ${headerInfo.rightIcon}`"></i>
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { IHeaderInfo } from '#/header';
  import { useHeaderInfo } from '@/composables';

  // data
  let headerInfo = reactive<IHeaderInfo>({
    name: 'Home',
    title: '新闻头条',
    rightIcon: 'person',
    showLeftIcon: false,
    showRightIcon: true,
    rightPath: '/collection',
  });

  const router = useRouter();
  const route = useRoute();

  // methods
  const goBackPage = () => {
    router.go(-1);
  };

  const handleFollowClick = () => {
    console.log('handleFollowClick');
  };

  // watch
  watch(
    () => route.name,
    (routeName) => {
      // 根据当前的 route.name 获取到相应的 IHeaderInfo 对象
      const routeHeaderInfo: IHeaderInfo | undefined = useHeaderInfo(routeName as string);
      if (routeHeaderInfo) {
        // 要用 Object.assign 去修改 reactive 对象才能响应式更新
        Object.assign(headerInfo, routeHeaderInfo);
      }
    },
  );
</script>

<style scoped></style>
