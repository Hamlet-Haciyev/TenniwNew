module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
        serif: ["ui-serif", "Georgia"],
      },
      colors: {
        searchBtn: "#0066FF",
        newPost: "#0098FF",
        overlay:"rgba(52, 52, 52, 0.68)"
      },
      backgroundImage: {
        partnerBG: "url('assets/images/partnerBG.png')",
        authBG:"url('assets/images/login.png')"
      },
    },
  },
  plugins: [],
};
