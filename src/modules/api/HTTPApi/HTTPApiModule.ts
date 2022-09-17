import { AxiosResponse } from 'axios';
import { HTTPInstance } from './HTTPInstance';

export type IApiResponse = AxiosResponse;

export interface IRequestParams {
  [index: string]: string | number | object;
}

export interface IApiModule {
  instance: HTTPInstance;
}

export abstract class HTTPApiModule implements IApiModule {
  instance: HTTPInstance;

  constructor(instance: HTTPInstance) {
    this.instance = instance;
  }
}
