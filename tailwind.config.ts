import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C41230',
        navy: '#1E3A5F',
        dark: '#1A1A1A',
        lightgray: '#F8F8F8',
        ctahover: '#A50F27',
        navyhover: '#162d4a',
        badge: '#F5C400',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
