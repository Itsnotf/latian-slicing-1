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
        ungu: "#5D50C6",
        hitam: "#222831",
      },
      boxShadow: {
        "white-shadow": [
          "0px 0px 0px 0px rgba(0, 0, 0, 0.07)",
          "0px 34px 75px 0px rgba(0, 0, 0, 0.07)",
          "0px 137px 137px 0px rgba(0, 0, 0, 0.06)",
          "0px 308px 185px 0px rgba(0, 0, 0, 0.04)",
          "0px 548px 219px 0px rgba(0, 0, 0, 0.01)",
          "0px 856px 240px 0px rgba(0, 0, 0, 0.00)",
        ].join(", "),
        "black-shadow": [
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
          "0px 5px 11px 0px rgba(0, 0, 0, 0.10)",
          "0px 20px 20px 0px rgba(0, 0, 0, 0.09)",
          "0px 45px 27px 0px rgba(0, 0, 0, 0.05)",
          "0px 81px 32px 0px rgba(0, 0, 0, 0.01)",
          "0px 126px 35px 0px rgba(0, 0, 0, 0.00)",
        ].join(", "),
        "card-shadow": [
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
          "0px 41px 89px 0px rgba(0, 0, 0, 0.10)",
        ].join(", "),
      },
    },
  },
  plugins: [],
};

export default config;
