/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
<<<<<<< HEAD
const withMT = require("@material-tailwind/react/utils/withMT");

 module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

=======
=======
>>>>>>> 6478b91120187176bae61e5ddc21f1ef51bde156
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
    },
    extend: {
      spacing: {
        '5px': '5px',
      },
      textColor: ['current'],
    },
     
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1399px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1199px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '991px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '767px'},
      // => @media (max-width: 639px) { ... }

      'col': {'max': '567px'},
      // => @media (max-width: 320px) { ... }
    },
    fontFamily: {
      'base-font': ['Inter', 'sans-serif'],
      'heading-font': ['Futura PT'],
    },
  },
  plugins: [],
}
<<<<<<< HEAD
>>>>>>> 94269223b376e217fcc927f5e44386e55d029069
=======
=======
const withMT = require("@material-tailwind/react/utils/withMT");

 module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

>>>>>>> 35c187726025b82c78601fe7c99a5f2955fde41c
>>>>>>> 6478b91120187176bae61e5ddc21f1ef51bde156
