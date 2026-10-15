/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#C8102E", // Colgate Signature Red
        "primary-hover": "#A00202",
        "primary-dark": "#830000",
        "primary-light": "#FEF2F2",
        "primary-electric": "#FF0000",
        "primary-crimson": "#BC0202",
        brandRed: "#C8102E",
        "brandRed-hover": "#A00202",
        "brandRed-light": "#FEF2F2",
        brandCrimson: "#BC0202",
        "brandCrimson-hover": "#990202",
        brandMaroon: "#830000",
        "brandMaroon-hover": "#6E0000",
        surface: "#FFFFFF",
        "surface-soft": "#F8FAFC",
        "surface-card": "#FFFFFF",
        "surface-border": "#E2E8F0",
        "surface-elevated": "#FFFFFF",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        colgate: "0 10px 25px -5px rgba(200, 16, 46, 0.2), 0 8px 10px -6px rgba(200, 16, 46, 0.1)",
        "colgate-lg": "0 20px 35px -10px rgba(200, 16, 46, 0.25)",
        card: "0 2px 12px -2px rgba(15, 23, 42, 0.08), 0 1px 4px -1px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 12px 28px -4px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(200, 16, 46, 0.08)",
        luxury: "0 10px 30px -5px rgba(15, 23, 42, 0.08)",
        "glow-red": "0 0 20px rgba(200, 16, 46, 0.35)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
