/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "terminal-green": "#13ec5b",
        "terminal-green-dim": "rgba(19, 236, 91, 0.4)",
        "terminal-green-faint": "rgba(19, 236, 91, 0.1)",
        "terminal-border": "rgba(19, 236, 91, 0.2)",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        display: ["'Press Start 2P'", "cursive"],
        default: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        // ... (preserving existing slide animations but adding scanline/flicker)
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "flicker": "flicker 0.15s infinite",
        "scanline": "scanline 8s linear infinite",
        "scan": "scan 3s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "flicker": {
          "0%": { opacity: 0.97 },
          "5%": { opacity: 0.95 },
          "10%": { opacity: 0.9 },
          "15%": { opacity: 0.95 },
          "20%": { opacity: 0.98 },
          "25%": { opacity: 0.95 },
          "30%": { opacity: 0.9 },
          "35%": { opacity: 0.95 },
          "40%": { opacity: 0.98 },
          "45%": { opacity: 0.95 },
          "50%": { opacity: 0.9 },
          "55%": { opacity: 0.95 },
          "60%": { opacity: 0.98 },
          "65%": { opacity: 0.95 },
          "70%": { opacity: 0.9 },
          "75%": { opacity: 0.95 },
          "80%": { opacity: 0.98 },
          "85%": { opacity: 0.95 },
          "90%": { opacity: 0.9 },
          "95%": { opacity: 0.95 },
          "100%": { opacity: 1 },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "blink": {
          "from, to": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("autoprefixer"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
