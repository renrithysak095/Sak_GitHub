/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{

    },
    extend: {
      width :{

      },
      height :{

      },
      colors :{

      }
    },
    backgroundImage: {
      'r-img': "url('../public/Images/Images/static7.jpg')",
    },
    fontSize : {
      '1' : '23px',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}