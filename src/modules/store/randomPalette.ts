import { defineStore } from 'pinia';
import { randomPaletteGeneratorApi } from '@/modules/api/ColorPaletteRapidApi';

export interface IPaletteItem {
  id: number;
  palette: string[];
}

export interface IPalette {
  type: string;
  data: IPaletteItem[];
}

export const useRandomPalette = defineStore('randomPalette', {
  state: (): IPalette => ({
    type: '',
    data: [],
  }),
  getters: {},
  actions: {
    async getRandomPalette(numberOfPalettes: number, numberOfColors: number): Promise<void> {
      const { data } = await randomPaletteGeneratorApi.getPalette(numberOfPalettes, numberOfColors);
      this.setPalette(data);
    },
    setPalette(palette: IPalette): void {
      this.$patch({ ...palette });
    },
  },
});
