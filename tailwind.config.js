/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // Jangan lupa install ini: npm install -D @tailwindcss/typography
      require('@tailwindcss/typography'), 
    ],
  }