import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1d4ed8",
        brandGreen: "#10b981"
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
} satisfies Config;