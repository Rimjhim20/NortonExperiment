module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        'blue': '#7EE0F3',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
