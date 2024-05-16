/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        iconColor: "#A2A2A8",
        pureWhite: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strockColor: "#F1F1F3",
        liteBackground: "#FCFCFD",
        errorColor: "#EB5757",
        darkBg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStrock: "#3A3A43",
        primaryColorExtra: "#F1FBF7",
        bgBar: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
