/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)',
      },
      colors: {
        'custom-purple': '#8252fa',
        'custom-pink': '#eca2f1',
      },
      fontFamily: {
        'custom-font': ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'custom-weight': 500,
      },
      fontSize: {
        'custom-size': '13.6px',
      },
      lineHeight: {
        'custom-line-height': '10rem',
      },
      screens: {
        'xs': '640px',
        'sm': '375px',
        'md': '768px',
        'tab': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '1366': '1366px',
        '1440': '1440px',
        '1660': '1660px',
        '1920': '1920px',
        'full': '2560px',
      },
    },
  },
  plugins: [],
}

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

// linear-gradient(to right, #8252fa 0%, #eca2f1 100%), radial-gradient(circle at top left, #8252fa, #eca2f1)
