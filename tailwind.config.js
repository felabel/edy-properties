/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}'
  ],
  extend: {
    colors: {
      brand: '#FF9505',
      light_bg: "rgba(0, 0, 0, 0.9)",
      
    },
    backgroundImage: {
      'light-bg': "rgba(0, 0, 0, 0.9)",
      'hero' : "url('/images/slideone.jpg')",
    },
  },
  theme: {
      
  },
  plugins: [],
}
