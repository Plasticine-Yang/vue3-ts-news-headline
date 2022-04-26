import { INewsData } from '@/api/newsList/typing';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { PageFrom } from '@/components/NewsList/NewsItem/typing';
import useHomeStore from '@/store/home';

export function useNewsDetail(route: RouteLocationNormalizedLoaded): INewsData | undefined {
  const { uniquekey, pageFrom } = <{ uniquekey: string; pageFrom: PageFrom }>route.params;
  let newsData = undefined;

  switch (pageFrom) {
    // 从新闻首页来 --> newsData 从 pinia 中获取
    case 'home':
      const homeStore = useHomeStore();
      const newsList = homeStore.newsListInfo.newsList;
      newsData = newsList.find((item) => item?.uniquekey === uniquekey);
      break;
    // 从收藏列表来 --> newsData 从 localStorage 中获取
    case 'collection':
      break;
  }

  return newsData;
}
