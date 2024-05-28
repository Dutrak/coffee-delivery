/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#564F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
      'background': '#FAFAFA',
      'white': '#FFFFFF',

      'yellow-dark': '#C46F17',
      'yellow': '#DBAC2C',
      'yellow-light': '#F1E9C1',

      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',
    },
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'baloo2': ['"Baloo 2"', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/assets/HeroBackground.svg)",
      },
    },
  },
  plugins: [],
}

