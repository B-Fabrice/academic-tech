/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-bg': '#f6f8fa',
        'soft-gray': '#e9ebed',
        'cloud-white': '#fbfcfd',
        'mist-gray': '#dfe1e3',
        'dark-bg': '#22252b',
        'charcoal': '#2b2d34',
        'graphite': '#14161c',
        'slate': '#1a1c22',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

