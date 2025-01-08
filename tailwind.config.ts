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
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
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
            a: {
              color: "#2B2B2B",
              "&:hover": {
                color: "#4A4A4A",
              },
            },
            "h1, h2, h3, h4": {
              fontFamily: "Playfair Display, serif",
              fontWeight: "700",
            },
            "p, ul, ol": {
              fontFamily: "Inter, sans-serif",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
