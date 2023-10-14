/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        firstPoint : {
          max : "1024px"
        },
        secondPoint : {
          max : "768px"
        },
        fourthPoint : {
          max : "375px"
        },
        thirdPoint : {
          max : "425px"
        },
        fifthPoint : {
          max : "320px"
        },
      }
    },
  },
  plugins: [],
}

