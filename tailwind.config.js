/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        nova: "Bona Nova SC",
        algeria: "Alegreya Sans",
      },
      colors: {
        lightBrown: "#ede0d4",
        mildBrown: "#e6ccb2",
        brown: "#ddb892",
        darkBrown: "#b08968",
      },
      backdropFilter: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
