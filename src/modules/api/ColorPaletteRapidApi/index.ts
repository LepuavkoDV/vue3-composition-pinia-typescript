import {
  ApiModule,
  IApiModule,
  IApiResponse,
} from '@/modules/api/HTTPApi/ApiModule';
import { headers, ERandomPaletteGeneratorRapidApiEndpoints } from './config';

class RandomPaletteGeneratorRapidApi extends ApiModule implements IApiModule {
  constructor() {
    super();
    this.http.setHeaders(headers);
  }

  getPalette(numberOfPalettes: number, numberOfColors: number): Promise<IApiResponse> {
    return this.http.get(`${ERandomPaletteGeneratorRapidApiEndpoints.getPalette}/${numberOfPalettes}/${numberOfColors}`);
  }
}

export const randomPaletteGeneratorApi = new RandomPaletteGeneratorRapidApi();
