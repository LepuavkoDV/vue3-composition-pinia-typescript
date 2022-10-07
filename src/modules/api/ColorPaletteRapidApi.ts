import {
  ApiModule,
  IApiModule,
  IApiResponse,
  IRapidApiRequestHeaders,
} from '@/modules/api/ApiModule';

const requestHeaders: IRapidApiRequestHeaders = {
  'X-RapidAPI-Key': 'f6ec054409msh6b81feb5aef6c24p1054b2jsn9f79e10d9358',
  'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com',
};

enum endpoints {
  getPalette = 'https://random-palette-generator.p.rapidapi.com/palette',
}

class RandomPaletteGeneratorRapidApi extends ApiModule implements IApiModule {
  constructor() {
    super();
    this.http.setHeaders(requestHeaders);
  }

  getPalette(numberOfPalettes: number, numberOfColors: number): Promise<IApiResponse> {
    return this.http.get(`${endpoints.getPalette}/${numberOfPalettes}/${numberOfColors}`);
  }
}

export const randomPaletteGeneratorApi = new RandomPaletteGeneratorRapidApi();
