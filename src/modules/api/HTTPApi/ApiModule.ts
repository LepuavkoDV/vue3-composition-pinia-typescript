import { AxiosResponse } from 'axios';
import { HTTPInstance } from './HTTPInstance';

export type IApiResponse = AxiosResponse;

export interface IApiModule {
  http: HTTPInstance;
}

export class ApiModule implements IApiModule {
  http: HTTPInstance;

  constructor() {
    this.http = new HTTPInstance();
  }
}
