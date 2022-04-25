export interface IApiResult<T = any> {
  code: number;
  message: string;
  data: T;
}
