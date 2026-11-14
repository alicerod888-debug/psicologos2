import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: { 50: "#F3F6F3", 100: "#E4EBE5", 200: "#C9D6CB", 300: "#A9BDAD", 400: "#8CA391", 500: "#728B78", 600: "#5B7361", 700: "#485C4E" },
        cream: { DEFAULT: "#FAF6EE", light: "#FDFBF7" },
        beige: { DEFAULT: "#E9DFCC", dark: "#D8C9AD" },
        brown: { DEFAULT: "#5A4636", soft: "#7A6554" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(90,70,54,0.15)",
        lift: "0 24px 60px -18px rgba(91,115,97,0.35)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-16px) rotate(3deg)" } },
        floatSlow: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "50%": { transform: "translate(10px,-14px) scale(1.04)" } },
      },
      animation: { float: "float 9s ease-in-out infinite", "float-slow": "floatSlow 14s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
