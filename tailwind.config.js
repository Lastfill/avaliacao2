/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          blue: '#0F172A',     // Azul escuro profundo (Premium)
          gold: '#B59410',     // Dourado Sofisticado
          lightGold: '#F5E6C4',
          gray: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}