/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        _blue: "#146EB4",
        _white: "#FFFFFF",
        _black: "#000000"
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize:{
        'title': ['32px', { fontWeight: '700' }],  
        'text': ['14px', { fontWeight: '400' }],   
        'button': ['12px', { fontWeight: '500' }], 
        'lp-title': ['48px', { fontWeight: '800' }],
        'lp-text': ['32px', { fontWeight: '400' }], 
        'lp-button': ['16px', { fontWeight: '600' }],
      }
    },
  },
  plugins: [],
}