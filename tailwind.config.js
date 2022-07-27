/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark-cyan': '#3c8067',
      'cream': '#f2ebe3',
      'very-dark-blue': '#1c232b',
      'dark-grayish-blue': '#6c7289',
      'white': '#ffffff',
    },
    fontFamily: {
      'montserrat': ["Montserrat", "sans-serif"],
      'fraunces': ["Fraunces", "serif"],
    },
  },
  plugins: [],
}
