/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}'
  ],
  extend: {
    colors: {
      brand: '#FF9505',
      
    },
    backgroundImage: {
      'light-bg': "black",
      'hero' : "url('/images/hero.jpg')",
    },
  },
  theme: {
      
  },
  plugins: [],
}
