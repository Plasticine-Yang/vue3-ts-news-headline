export interface IApiResult<T = any> {
  reason: string;
  result: T;
  error_code: number;
}
