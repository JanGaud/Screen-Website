// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'steel_blue': {
          DEFAULT: '#2d7dd2',
          100: '#09192a',
          200: '#123254',
          300: '#1b4b7e',
          400: '#2464a8',
          500: '#2d7dd2',
          600: '#5797db',
          700: '#81b1e4',
          800: '#abcbed',
          900: '#d5e5f6',
        },
        'yellow_green': {
          DEFAULT: '#97cc04',
          100: '#1e2901',
          200: '#3d5202',
          300: '#5b7b03',
          400: '#79a403',
          500: '#97cc04',
          600: '#bdfa13',
          700: '#cdfb4e',
          800: '#defd89',
          900: '#eefec4',
        },
        'saffron': {
          DEFAULT: '#eeb902',
          100: '#2f2500',
          200: '#5f4b01',
          300: '#8e7001',
          400: '#be9502',
          500: '#eeb902',
          600: '#fdcf29',
          700: '#fddb5e',
          800: '#fee794',
          900: '#fef3c9',
        },
        'persimmon': {
          DEFAULT: '#f45d01',
          100: '#311300',
          200: '#612600',
          300: '#923801',
          400: '#c34b01',
          500: '#f45d01',
          600: '#fe7c2c',
          700: '#fe9d61',
          800: '#febe95',
          900: '#ffdeca',
        },
        "davys_gray": {
          DEFAULT: '#474647',
          100: '#0e0e0e',
          200: '#1d1c1d',
          300: '#2b2a2b',
          400: '#3a393a',
          500: '#474647',
          600: '#6d6b6d',
          700: '#929092',
          800: '#b6b5b6',
          900: '#dbdadb',
        }
      }
    }
  },
  plugins: []
};
