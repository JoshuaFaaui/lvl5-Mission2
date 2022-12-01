/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#3f3f46",
          1: "#d4d4d8",
        },
      },
      backgroundImage: {
        Dubai:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8MnI9AgIOrjmy2Sn7y2_Ebiaji_vfwRc_Q&usqp=CAU')",
        suitableCarBackground:
          "url('https://media.istockphoto.com/id/117150907/photo/car-dealership.jpg?s=612x612&w=0&k=20&c=eOawJ7hV9juLgSDtRhaYmAcCl5hPAN3lzqqFwsGvmm4=')",
      },
      screens: {
        sm: "0px",
        // => @media (min-width: 576px) { ... }

        md: "720px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
