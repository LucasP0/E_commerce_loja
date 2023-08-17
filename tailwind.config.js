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
        '2h': '25% auto',
        'rep': 'repeat(auto-fill, minmax(200px, 1fr))',
        
      },
      gridTemplateRows: {
        'burro': '1fr 1fr',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '850px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

