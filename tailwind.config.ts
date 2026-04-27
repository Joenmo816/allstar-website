import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        allstarBlue: "#1E4FAF",
        allstarBlueDark: "#153B85",
        allstarBlueLight: "#EAF1FF",

        allstarRed: "#C62828",
        allstarRedDark: "#991B1B",
        allstarRedLight: "#FDECEC",

        allstarGold: "#F2C94C",
        allstarGoldDark: "#D4A72C",
        allstarGoldLight: "#FFF7DB",

        allstarInk: "#101828",
        allstarSlate: "#475467",
        allstarCloud: "#F8FAFC",
        allstarWhite: "#FFFFFF",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        brand: "0 10px 30px rgba(16, 24, 40, 0.12)",
        hero: "0 18px 48px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;

