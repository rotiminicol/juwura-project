/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#f9e8d8',
          200: '#f2d0b0',
          300: '#eab587',
          400: '#e39a60',
          500: '#db8039',
          600: '#c6632d',
          700: '#a44a26',
          800: '#853c25',
          900: '#6d3422',
          950: '#3c1a10',
        },
        secondary: {
          50: '#fcf9f5',
          100: '#f5ede2',
          200: '#ead6c0',
          300: '#dcba97',
          400: '#cd9c6c',
          500: '#c2824f',
          600: '#b16a42',
          700: '#935038',
          800: '#774133',
          900: '#63392d',
          950: '#351c16',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia'],
        'display': ['Marcellus', 'serif'],
      }
    },
  },
  plugins: [],
};