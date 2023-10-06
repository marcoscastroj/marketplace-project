import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        market:
          'url(https://img.freepik.com/fotos-premium/grande-carrinho-de-compras-cinza-e-preto-no-supermercado_124507-42660.jpg)',
      },
    },
  },
  plugins: [],
}
export default config