/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#0BAA9B",
        "brand-blue": "#0D4F7C"
      },
      boxShadow: {
        soft: "0 8px 20px rgba(16,24,40,0.06)"
      }
    }
  },
  plugins: []
};