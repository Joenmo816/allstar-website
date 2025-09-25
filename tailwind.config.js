/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        primary: "#10B981",  // emerald
        accent:  "#2563EB",  // royal blue
        navy:    "#0B2447",
        gold:    "#F59E0B",
      },
      boxShadow: { card: "0 8px 24px rgba(0,0,0,0.08)" },
      borderRadius: { xl: "0.9rem", "2xl": "1.25rem" },
    },
  },
  plugins: [],
};
