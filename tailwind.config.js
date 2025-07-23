/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        orangered: "#ff3300",
        mintcream: "#f0faf5",
        gray: "#0f0f0f",
        lightgreen: "#bbf9a0",
        aquamarine: "#89fde9",
      },
      fontFamily: {
        "happy-times-at-the-ikob-new-game-plus-edition":
          "Happy Times at the IKOB New Game Plus Edition",
        "switzer-variable": "Switzer Variable",
        "ibm-plex-sans-condensed": "IBM Plex Sans Condensed",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
