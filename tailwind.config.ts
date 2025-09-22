import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e6f7f5",
          100: "#c9f0eb",
          200: "#98e2d9",
          300: "#67d4c7",
          400: "#36c6b5",
          500: "#1db6a4",   // accent teal
          600: "#0ea5a7",   // primary teal
          700: "#0f7f8b",
          800: "#0f4c81",   // brand navy
          900: "#0b2a3c"    // deep navy
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0ea5a7 0%, #0f4c81 100%)"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15,76,129,.12)"
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
