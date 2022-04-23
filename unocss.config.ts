import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  shortcuts: [['icon-area', 'absolute top-0 h-10 w-10 flex justify-center items-center']],
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
