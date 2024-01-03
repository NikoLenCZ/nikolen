/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        NunitoBold: ['nunito bold', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        NunitoBlack: ['nunito black', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif' ],
    },
    screens: {
      mobile: '400px',
      'max-mobile': { min: '0px', max: '399px' },
      small: '640px',
      'max-small': { min: '0px', max: '639px' },
      medium: '768px',
      'max-medium': { min: '0px', max: '767px' },
      large: '1024px',
      'max-large': { min: '0px', max: '1023px' },
      'large-extra': { min: '1024px', max: '1439px' },
      extralarge: '1280px',
      'xl-1320': '1320px',
      1440: '1440px',
      'max-extraLarge': { min: '0px', max: '1439px' },
      largest: '1680px',
      1920: '1920px',
      tall: { raw: '(min-height: 650px)' },
  },

    },
  
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

  ],
}
}
