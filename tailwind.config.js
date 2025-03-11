/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx,html}'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#05094B',
      },
      screens: {
        sm: '0px',
        md: '768px',
        lg: '997px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
