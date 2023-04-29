/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    extend: {
      fontFamily: {
        primary: 'Poppins',
      },
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('./assets/bg_hero.svg')",
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
