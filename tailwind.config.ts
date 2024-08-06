import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          // Custom color palette
          primary: {
            "marine-blue": "hsl(213, 96%, 18%)",
            "marine-blue-hover": "hsl(214, 68%, 32%)",
            "purplish-blue": "hsl(243, 100%, 62%)",
            "pastel-blue": "hsl(228, 100%, 84%)",
            "light-blue": "hsl(206, 94%, 87%)",
            "strawberry-red": "hsl(354, 84%, 57%)",
          },
          neutral: {
            "cool-gray": "hsl(231, 11%, 63%)",
            "light-gray": "hsl(229, 24%, 87%)",
            magnolia: "hsl(217, 100%, 97%)",
            alabaster: "hsl(231, 100%, 99%)",
            white: "hsl(0, 0%, 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
