module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F96277",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C"
      },
      yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FCCB76",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309"
      },
      orange: "#FA8C6D",
      green: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#4ED4AF",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857"
      },
      blue: "#3C6A8B",
      indigo: { 100: "#5B6098", 500: "#4e5383" },
      violet: "#8760A8",
      white: "#FFFFFF",
      grey1: "#FBFAFB",
      grey2: "rgb(248, 249, 250)",
      grey3: "#D1D1D6",
      grey4: "#C7C7CC",
      grey5: "#292721",
      black: "#000000",
      gray: {
        50: "rgba(249, 250, 251, 1)",
        100: "rgba(243, 244, 246, 1)",
        200: "rgba(229, 231, 235, 1)",
        300: "rgba(209, 213, 219, 1)",
        400: "rgba(156, 163, 175, 1)",
        500: "#6B7280",
        600: "rgba(75, 85, 99, 1)",
        700: "#374151",
        800: "#1F2937",
        900: "#111827"
      }
    },
  },
  plugins: [],
}
