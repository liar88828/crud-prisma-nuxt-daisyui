/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
  },
}
