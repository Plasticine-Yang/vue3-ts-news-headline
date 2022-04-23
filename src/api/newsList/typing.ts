export type NewsListTypeParams =
  | 'top'
  | 'guonei'
  | 'guoji'
  | 'yule'
  | 'tiyu'
  | 'junshi'
  | 'keji'
  | 'caijing'
  | 'youxi'
  | 'qiche'
  | 'jiankang';

export interface INewsData {
  uniquekey: string;
  title: string;
  date: string;
  category: string;
  author_name: string;
  url: string;
  thumbnail_pic_s: string;
  thumbnail_pic_s02?: string;
  thumbnail_pic_s03?: string;
  is_content: string;
}

export interface INewsListResult {
  stat: string;
  data: INewsData[];
  page: string;
  pageSize: string;
}
