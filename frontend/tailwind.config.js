/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#BC0202",
        "primary-hover": "#FF0000",
        "primary-dark": "#830000",
        "primary-light": "#FFF1F1",
        brandBlack: "#000000",
        brandMaroon: "#830000",
        "brandMaroon-hover": "#6E0000",
        "brandMaroon-light": "#2A0808",
        brandCrimson: "#BC0202",
        "brandCrimson-hover": "#A00202",
        "brandCrimson-light": "#3D0707",
        brandRed: "#FF0000",
        "brandRed-hover": "#E60000",
        "brandRed-light": "#540000",
        surface: "#080404",
        "surface-soft": "#120707",
        "surface-card": "#180909",
        "surface-glass": "rgba(18, 7, 7, 0.8)",
        dark: "#050202",
        "dark-soft": "#0F0606",
        "dark-muted": "#9CA3AF",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        luxury: "0 12px 32px -10px rgba(188, 2, 2, 0.25)",
        "luxury-lg": "0 20px 44px -12px rgba(188, 2, 2, 0.35)",
        red: "0 12px 32px -10px rgba(255, 0, 0, 0.35)",
        glow: "0 0 25px rgba(255, 0, 0, 0.45)",
        card: "0 4px 20px -2px rgba(131, 0, 0, 0.25), 0 2px 6px -1px rgba(0, 0, 0, 0.5)",
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
