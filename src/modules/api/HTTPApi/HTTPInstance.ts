import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosRequestHeaders,
} from 'axios';
import qs from 'query-string';

export interface IHTTPInstance {
  http: AxiosInstance;
  qs: typeof qs;
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

export class HTTPInstance implements IHTTPInstance {
  headers: AxiosRequestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  timeout = 5000;

  http: AxiosInstance;

  qs = qs;

  constructor() {
    const {
      timeout, headers,
    } = this;
    this.http = axios.create({
      timeout,
      headers,
    });

    this.http.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (error) => Promise.reject(error),
    );

    this.http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error),
    );
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get(url, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.head(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.options(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.patch(url, data, config);
  }

  setTimeout(timeout: number) {
    this.http.defaults.timeout = timeout;
  }

  setBaseUrl(url: string) {
    this.http.defaults.baseURL = url;
  }

  setHeaders(headers: AxiosRequestHeaders) {
    this.http.defaults.headers.common = headers;
  }
}
