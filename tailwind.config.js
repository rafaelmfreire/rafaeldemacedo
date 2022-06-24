module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./pages/**/*.vue",
    "./nuxt.config.js",
  ],
  theme: {
    screens: {
      mini: "640px",
      tablet: "768px",
      notebook: "1024px",
      desktop: "1200px",
    },
    fontSize: {
      '2xl': ["3.5rem", { lineHeight: "4.2rem", letterSpacing: "0em" }],
      xl: ["2.5rem", { lineHeight: "3rem", letterSpacing: "0em" }],
      lg: ["2rem", { lineHeight: "2.5rem", letterSpacing: "0em" }],
      md: ["1.125rem", { lineHeight: "1.5rem", letterSpacing: "0em" }],
      base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0em" }],
      sm: ["0.875rem", { lineHeight: "1.1875rem", letterSpacing: "0em" }],
      xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0em" }],
      xsp: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em" }],
    },
    fontFamily: {
      sans: "GeneralSans, sans-serif",
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      gray: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
    },
    extend: {
      zIndex: {
        sticky: 1000,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
