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
        darkerBrown: "#774936",
      },
      animation: {
        'slide-left': 'slideLeft 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
      },
      keyframes: {
        slideLeft : {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      backdropFilter: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
