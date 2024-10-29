

// const flowbite = require("flowbite-react/tailwind");
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,ts,jsx,tsx}",
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         sans: ['Poppins', 'sans-serif'], 
//       },
//       colors:{
//         Slate:'#cbd5e1'
//       },
//       animation: {
//         'delay-100': 'bounce 1s infinite 0.2s',
//         'delay-200': 'bounce 1s infinite 0.4s',
//       },
//       keyframes:{
//         bounce: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-25%)' },
//         },
//       }
//     },
//   },
//   plugins: [
//     flowbite.plugin(),
//   ],
// }

 const flowbite = require("flowbite-react/tailwind");
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      colors: {
        Slate:'#cbd5e1',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        'bounce-delay-100': 'bounce 1s infinite 0.1s',
        'bounce-delay-200': 'bounce 1s infinite 0.2s',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
    },
  },
  plugins: [],
}


