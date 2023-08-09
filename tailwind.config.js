/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ok': ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        'ih': '1fr 3fr 1fr',
        
      },
      gridTemplateRows: {
        'burro': '1fr 1fr',
      }
    },
  },
  plugins: [],
}

