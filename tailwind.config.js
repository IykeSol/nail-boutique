/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#EEA824',       // The exact vibrant gold button color
        darkGold: '#C58917',   // Slightly darker for hover states
        cream: '#FCF1E0',      // The exact beige background from the services page
        darkBlack: '#111111',  // The rich black used in the footer
        charcoal: '#1F1C17',   // For dark text
        lightGray: '#888888',  // For footer text
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}