/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        allstarBlue: "#0D3B66",
        allstarGreen: "#1FBF75",
      }
    },
  },
  plugins: [],
};