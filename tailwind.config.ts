import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-bg": "#F4F0DB",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "dash": "dash 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          "0%": { strokeDashoffset: "283" },
          "50%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-283" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2B2B2B",
            maxWidth: "none",
            a: {
              color: "#2B2B2B",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "#4A4A4A",
              },
            },
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-playfair), serif",
              fontWeight: "700",
              color: "#2B2B2B",
            },
            "p, ul, ol": {
              fontFamily: "var(--font-inter), sans-serif",
              color: "#4A4A4A",
            },
            img: {
              borderRadius: "0.5rem",
            },
            code: {
              color: "#2B2B2B",
              backgroundColor: "#F5F5F5",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            pre: {
              backgroundColor: "#F5F5F5",
              color: "#2B2B2B",
              padding: "1rem",
              borderRadius: "0.5rem",
              code: {
                backgroundColor: "transparent",
                padding: "0",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
