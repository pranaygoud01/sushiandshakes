/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        careysPink: {
          50:  '#fbf5f6',
          100: '#f7ecef',
          200: '#f0dbe1',
          300: '#e4bdc8',
          400: '#d59bad',
          500: '#c1728d',
          600: '#a95575',
          700: '#8d4361',
          800: '#773a55',
          900: '#67344c',
          950: '#381927',
        },
      },
    },
  },
  content: [
    './**/*.{html,js,jsx,ts,tsx}',
  ],
}
