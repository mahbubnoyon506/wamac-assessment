import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    // Exact breakpoints from your design guide
    screens: {
      mobile: "412px",
      tablet: "521px",
      tabletLg: "681px",
      desktop: "981px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sf-pro)", "sans-serif"],
      },
      colors: {
        // Primary Blue Scale
        primary: {
          50: "#EBF5FF",
          100: "#E1EFFF",
          200: "#C3DDFF",
          300: "#A5CBFF",
          400: "#66A1FF",
          500: "#2563EB", // Main Brand Color
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#172554",
          950: "#0F172A",
        },
        // Neutral Scale for Dark Mode
        neutral: {
          950: "#000000",
          900: "#0A0A0A",
          800: "#171717",
          700: "#262626",
        },
      },
      // Line heights from Type Style guide
      lineHeight: {
        tight: "115%",
        relaxed: "135%",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(37, 99, 235, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
