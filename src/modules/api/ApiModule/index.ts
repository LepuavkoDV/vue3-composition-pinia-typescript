import { AxiosResponse } from 'axios';
import { HTTP } from './HTTP';

export type IApiResponse = AxiosResponse;

export interface IApiModule {
  http: HTTP;
}

export class ApiModule implements IApiModule {
  http: HTTP;

  constructor() {
    this.http = new HTTP();
  }
}

export * from './types';
