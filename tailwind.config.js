/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0a0a0c",
        accentBlue: "#3b82f6",
        accentPurple: "#8b5cf6",
        glass: "rgba(255, 255, 255, 0.15)",
        brandDark: "#021024",
        brandSecondary: "#052659",
        brandAccent: "#5483B3",
        brandSoft: "#7DA0CA",
        brandLight: "#C1E8FF",
        bgLight: "#F3F7FA",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
