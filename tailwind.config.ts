import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideup: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-slideup": {
          "0%": { transform: "translateY(40%) scale(0.75)", opacity: "0" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadein: "fadein 700ms ease-in-out",
        slideup: "slideup 700ms ease-in-out",
        "fade-slideup": "fade-slideup 300ms ease-in-out",
        "slide-left": "slide-left 300ms ease-in-out",
        "title-reveal": "reveal 5s forwards",
        "title-showup": "showup 7s",
        "title-slidein": "slidein 5s forwards",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(135deg, rgb(255, 255, 255, 15%), rgb(21, 25, 31, 0%))",
      },
      dropShadow: {
        "card-hover": "0 0 0px rgb(255, 255, 255, 60%)",
      },
      colors: {
        primary: {
          DEFAULT: "#02cae0",
          50: "#ecffff",
          100: "#cefdff",
          200: "#a3f8fe",
          300: "#64f1fc",
          400: "#1ee0f2",
          500: "#02cae0",
          600: "#059bb5",
          700: "#0b7b93",
          800: "#136477",
          900: "#145365",
          950: "#073745",
        },
        background: {
          DEFAULT: "#1b2e30",
          50: "#f4f9f9",
          100: "#d9eeed",
          200: "#b2dddc",
          300: "#84c4c4",
          400: "#5aa4a7",
          500: "#40898c",
          600: "#316c70",
          700: "#2b555a",
          800: "#264549",
          900: "#1b2e30",
          950: "#102023",
        },
        light: "#B8B8B8",
      },
      boxShadow: {
        glasshover: "0 0 0 40px #ffffff50",
      },
      fontFamily: {
        primary: [
          "Bricolage Grotesque",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        secondary: ["Share Tech Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
