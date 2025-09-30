/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        essential: {
          pink: "#E96A8D",
          graphite: "#222326",
          gray900: "#121316",
          gray600: "#5A5E66",
          gray100: "#F3F4F6",
          gold: "#CBAF6B"
        }
      },
      borderRadius: {
        'xl': '1rem'
      },
      boxShadow: {
        'card': '0 6px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
}
