/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        /** Deep teal (brand) */
        primary: {
          DEFAULT: '#0d4d4d',
          50: '#e9f1ee',
          100: '#d4e3df',
          800: '#0a3d3d',
        },
        /** Metallic gold */
        gold: {
          DEFAULT: '#c5a059',
          dark: '#8b6d3a',
        },
      },
    },
  },
  plugins: [],
};
