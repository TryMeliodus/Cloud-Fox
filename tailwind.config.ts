import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/layout/**/*.tsx', './src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        default: '#3C5979', // brand color
        head: '#00A9E0', // header
        background: '#F5F5F5', // background
        footerText: '#7A8DA2', // Footer text
        btnPrimary: '#0076FF', // Primary Button
        btngit: '#24292E', // Github Button
        borderemail: '#C1CCD9', // Email button border email
      },
    },
  },
  plugins: [],
}
export default config
