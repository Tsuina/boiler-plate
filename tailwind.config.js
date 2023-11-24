/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      white:'#FFF',
      dark: {
        DEFAULT: '#2F3F57',
      },
      green: {
        DEFAULT: '#419D78',
      },
      yellow: {
        DEFAULT: '#EAB464',
      },
      blue: {
        DEFAULT: '#1098F7',
        dark: '#01266b'
      },
      grey: {
        light:'#ededed',
        DEFAULT: '#A6B1E1',
        dark: '#444444'
      },
    },
  },
  plugins: [],
};
