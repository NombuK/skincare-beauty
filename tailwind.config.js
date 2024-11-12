/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        oswald: ["Oswald", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        whiteContact: "public/images/whitecontactBackground.jpg",
        blackContact: "public/images/blackcontactBackground.jpg",
        gold: "rgb(227, 192, 98)",
      },
      colors: {
        lightBrown: "#ede0d4",
        mildBrown: "#e6ccb2",
        brown: "#ddb892",
        darkBrown: "#b08968",
        darkerBrown: "#774936",
        gold: "rgb(227, 192, 98)",
        darkerGold: "#bb9457",
        mildBlack: "#171717",
        glowingGold: "#f1c251",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
        },
      },

      backdropFilter: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
