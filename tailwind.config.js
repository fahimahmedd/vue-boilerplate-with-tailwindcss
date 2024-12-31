/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#147AFF', 
        secondaryColor: '#FFBB5A', 
      },
    },
  },
  plugins: [],
}

