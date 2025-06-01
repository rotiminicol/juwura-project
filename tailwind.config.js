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
        },
        accent: {
          50: '#f9f8f4',
          100: '#f1eee3',
          200: '#e3d9c6',
          300: '#d3c0a4',
          400: '#c1a47f',
          500: '#b48c63',
          600: '#a67651',
          700: '#8a5f45',
          800: '#724e3d',
          900: '#5e4234',
          950: '#33221a',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Cormorant Garamond', 'ui-serif', 'Georgia'],
        'display': ['Marcellus', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4617267/pexels-photo-4617267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
  },
  plugins: [],
};