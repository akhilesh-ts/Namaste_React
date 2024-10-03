

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'], 
      },
      colors:{
        Slate:'#cbd5e1'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

