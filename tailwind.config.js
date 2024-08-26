/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

// Number of factors by which we extend the padding
// const factor = 3;

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "0.875rem", // equivalent to 14px
      base: "1rem", // equivalent to 16px
      lg: "1.25rem", // equivalent to 20px
      xl: "1.5rem", // equivalent to 24px
      "2xl": "2.25rem", // equivalent to 36px
      "3xl": "3rem", // equivalent to 48px
      "4xl": "3.375rem", // equivalent to 54px
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.68,
      relaxed: 1.95,
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    borderRadius: {
      none: "0",
      // 'sm': '0.125rem',
      // DEFAULT: '0.25rem',
      // DEFAULT: '4px',
      // 'md': '0.375rem',
      // 'lg': '0.5rem',
      // 'full': '9999px',
      // 'large': '12px',
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Primary color: #000345
        primary: {
          50: "#E6E8F8",
          100: "#C2C6EC",
          200: "#999FDB",
          300: "#707CB9",
          400: "#4D5A97",
          500: "#000345",
          600: "#00022E",
          700: "#000218",
          800: "#000102",
          900: "#000000",
        },
        // Secondary color: #D41B20
        secondary: {
          50: "#FFE9E9",
          100: "#FFCFCF",
          200: "#FFA6A6",
          300: "#FF7D7D",
          400: "#FF5656",
          500: "#D41B20",
          600: "#AD191D",
          700: "#871518",
          800: "#600F12",
          900: "#3A090D",
        },
        // Accent color: #27305a
        accent: {
          50: "#E6E9F4",
          100: "#C2C7E6",
          200: "#999FD4",
          300: "#707DB1",
          400: "#4D5C8E",
          500: "#27305a",
          600: "#222A50",
          700: "#1C2245",
          800: "#161A3B",
          900: "#0F102A",
        },
        // Neutral color: #D7DAE8
        neutral: {
          50: "#F5F6FA",
          100: "#E8EAF6",
          200: "#C8CCE1",
          300: "#A7ACCB",
          400: "#6D759B",
          500: "#D7DAE8",
          600: "#4A5476",
          700: "#39445E",
          800: "#2B354A",
          900: "#1F2537",
        },
        // Gray colors
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        success: {
          DEFAULT: "#34D399",
          50: "#EAF9F0",
          100: "#C7ECD6",
          200: "#9EDFB8",
          300: "#75D29A",
          400: "#4CC57C",
          500: "#34D399", // DEFAULT
          600: "#2CAE7C",
          700: "#208D60",
          800: "#166F44",
          900: "#0D5127",
        },
        warning: {
          DEFAULT: "#FBBF24",
          50: "#FEF8E7",
          100: "#FCE8B2",
          200: "#F9D17C",
          300: "#F6BC46",
          400: "#F3A510",
          500: "#FBBF24", // DEFAULT
          600: "#C48E15",
          700: "#926D0F",
          800: "#604C09",
          900: "#2E2B04",
        },
        danger: {
          DEFAULT: "#EF4444",
          50: "#FFE9E9",
          100: "#FFC7C7",
          200: "#FFA5A5",
          300: "#FF8383",
          400: "#FF6161",
          500: "#EF4444", // DEFAULT
          600: "#CC3333",
          700: "#992626",
          800: "#661919",
          900: "#330C0C",
        },
        info: {
          DEFAULT: "#3B82F6",
          50: "#E5F2FE",
          100: "#B8DCFE",
          200: "#89C5FD",
          300: "#5AB0FD",
          400: "#2B9AFC",
          500: "#3B82F6", // DEFAULT
          600: "#1E5FCA",
          700: "#134692",
          800: "#0A2C5A",
          900: "#031229",
        },
        tertiary: {
          DEFAULT: "#8B5CF6",
          50: "#F1E8FE",
          100: "#D3BDFC",
          200: "#B58DF9",
          300: "#976CF6",
          400: "#794CF4",
          500: "#8B5CF6", // DEFAULT
          600: "#6A44C6",
          700: "#4D3298",
          800: "#30216A",
          900: "#190C3B",
        },
        tertiaryForeground: "#FFFFFF",
        successForeground: "#FFFFFF",
        warningForeground: "#FFFFFF",
        dangerForeground: "#FFFFFF",
        infoForeground: "#FFFFFF",
      },
      boxShadow: {
        "sm-primary":
          "0 1px 2px 0 rgba(0, 3, 69, 0.05), 0 1px 3px 1px rgba(0, 3, 69, 0.1)",
        "md-primary":
          "0 4px 6px -1px rgba(0, 3, 69, 0.1), 0 2px 4px -1px rgba(0, 3, 69, 0.06)",
        "lg-primary":
          "0 10px 15px -3px rgba(0, 3, 69, 0.1), 0 4px 6px -2px rgba(0, 3, 69, 0.05)",
        "xl-primary":
          "0 20px 25px -5px rgba(0, 3, 69, 0.1), 0 10px 10px -5px rgba(0, 3, 69, 0.04)",
        "2xl-primary": "0 25px 50px -12px rgba(0, 3, 69, 0.25)",
      },
      // Find the "factor" by which we extend this value outside the "module.exports" function above
      // padding: (() => {
      //   const values = {};
      //   for (let i = 1; i <= 10; i++) {
      //     values[`${i * factor}px`] = `${i * factor}px`;
      //   }
      //   return values;
      // })(),
    },
  },
  // variants: {
  //   extend: {
  //     boxShadow: ["hover", "focus"],
  //   },
  // },
  plugins: [],
};
