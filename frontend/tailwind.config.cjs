/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
    
      colors: {
        herpaMainBlue: 'hsl(192,97%,48%)',
        herpaBlue: 'hsl(193, 96%, 50%)',
        herpaBlueLight: 'hsl(190, 50%, 70%)',
        herpaBlueLight1: 'hsl(191, 95%, 45%)',
        herpaDarkRed: 'hsl(355,70%,30%)',
        herpaLightDarkRed: 'hsl(350,63%,75%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkSlideBg: 'hsl(0, 0%, 12%)/50',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
