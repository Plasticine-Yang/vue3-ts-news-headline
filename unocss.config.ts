import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  shortcuts: [
    ['icon-area', 'absolute top-0 h-10 w-10 flex justify-center items-center'],
    ['news-item', 'border-b-2 border-[#fbfbfb] p-4'],
    ['news-item-image-area', 'flex gap-1 mt-2 bg-[#fff]'],
    ['news-item-image', 'rounded-sm bg-[#eee]'],
    ['news-item-multi-image', 'w-33% flex-auto'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
});
