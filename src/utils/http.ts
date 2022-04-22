import axios from 'axios';
import qs from 'qs';

import { BASE_URL } from '@/config/apiConfig';
import { ContentType } from '@/config/httpConfig';

const instance = axios.create({
  headers: {
    'Content-Type': ContentType.URL_ENCODED,
  },
  baseURL: BASE_URL,
});

instance.interceptors.response.use((res) => {
  return res.data;
});

export function axiosGet<T = any>(url: string, params: any): Promise<T> {
  return instance.get(url, { params });
}

export function axiosPost<T = any>(url: string, data: any): Promise<T> {
  return instance.post(url, qs.stringify(data));
}
