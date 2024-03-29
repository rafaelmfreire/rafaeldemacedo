const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.js",
    "./content/**/*.md",
  ],
  theme: {
    screens: {
      mini: "640px",
      tablet: "768px",
      desktop: "1024px",
    },
    fontSize: {
      "2xl": ["3.5rem", { lineHeight: "4.2rem", letterSpacing: "0em" }],
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
      auxiliary: {
        success: {
          light: "#bbf7d0",
          DEFAULT: "#22c55e",
          dark: "#166534",
        },
        alert: {
          light: "#fef08a",
          DEFAULT: "#eab308",
          dark: "#854d0e",
        },
        error: {
          light: "#fecaca",
          DEFAULT: "#dc2626",
          dark: "#991b1b",
        },
      },
    },
    groups: ["base", "li"],
    extend: {
      zIndex: {
        cardLink: 1000,
        sticky: 1001,
        popover: 1002,
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#44403c",
            a: {
              color: "#1d4ed8",
              "&:hover": {
                color: "#1e40af",
                textDecorationThickness: "2px",
              },
              textUnderlineOffset: "1px",
            },
            code: {
              color: "#1d4ed8",
              backgroundColor: "#eff6ff",
              padding: "4px",
              borderRadius: "0.25rem",
            },
            blockquote: {
              fontStyle: "normal",
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(({ addVariant, theme }) => {
      const groups = theme("groups") || [];

      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`;
        });
      });
    }),
  ],
};
