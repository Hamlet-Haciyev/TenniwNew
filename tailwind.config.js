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
        btnblue: "#0066FF",
      },
    },
  },
  plugins: [],
};
