/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../build/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentcolor',
        white: '#ffffff',
        primarybrandColor: '#01468B',
        secondarybrandColor: '#F5600E',
        trujilloMedia: '#34aeef',
       
  
      },
      fontFamily: {
        primaryHeader: "'Ysabeau Office', sans-serif;",
        secondaryHeader: "'Roboto Slab', serif",
        bodyText: "'Merriweather', serif",
     
      }
    },
  },
  plugins: [],
};
