import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
} from 'axios';
import qs from 'query-string';

export const defaultTimeout = 5000;

export interface IHTTP {
  instance: AxiosInstance;
  queryString: typeof qs;
  headers: AxiosRequestHeaders;
  timeout: number;
  setTimeout(timeout: number): void;
  setBaseUrl(url: string): void;
  setHeaders(headers: AxiosRequestHeaders): void;
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

export class HTTP implements IHTTP {
  headers: AxiosRequestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  timeout = defaultTimeout;

  instance: AxiosInstance;

  queryString = qs;

  constructor() {
    const {
      timeout, headers,
    } = this;
    this.instance = axios.create({
      timeout,
      headers,
    });

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (error) => Promise.reject(error),
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error),
    );
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.instance.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.head(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.options(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.patch(url, data, config);
  }

  setTimeout(timeout: number) {
    this.instance.defaults.timeout = timeout;
  }

  setBaseUrl(url: string) {
    this.instance.defaults.baseURL = url;
  }

  setHeaders(headers: AxiosRequestHeaders) {
    this.instance.defaults.headers.common = headers;
  }
}
