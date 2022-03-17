module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0,0%,48%)",
        "light-gray": "#B1B1B1",
        "background-white": "#F2F2F2",
      },
      minHeight: {
        hero: "400px",
      },
      spacing: {
        backing: "900px",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
