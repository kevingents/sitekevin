import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A",
          800: "#152138",
          700: "#1E2A45",
          600: "#2A3B5C",
        },
        bone: {
          DEFAULT: "#F8FAFC",
          200: "#EEF2F7",
        },
        brand: {
          DEFAULT: "#EC6806",
          50: "#FFF4EB",
          100: "#FFE3CC",
          200: "#FDC79A",
          300: "#F9A862",
          400: "#F18A36",
          500: "#EC6806",
          600: "#C9560A",
          700: "#9E430C",
          800: "#7A350D",
          900: "#5E2A0E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "76rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px -12px rgba(15, 23, 42, 0.12)",
        "card-lg": "0 1px 2px rgba(15, 23, 42, 0.04), 0 28px 60px -24px rgba(15, 23, 42, 0.22)",
        glow: "0 18px 60px -20px rgba(236, 104, 6, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.21, 0.61, 0.35, 1) both",
        "fade-in": "fade-in 0.6s ease both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
