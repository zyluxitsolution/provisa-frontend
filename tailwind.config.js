/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        text: {
          50: "#070912",
          100: "#0e1325",
          200: "#1c254a",
          300: "#2a386f",
          400: "#384a94",
          500: "#465db9",
          600: "#6b7dc7",
          700: "#909ed5",
          800: "#b5bee3",
          900: "#dadff1",
          950: "#edeff8",
        },

        primary: {
          DEFAULT: "#f4300b",
          foreground: "hsl(var(--primary-foreground))",

          // scarlet
          "50": "#fff4ed",
          "100": "#ffe5d5",
          "200": "#ffc7a9",
          "300": "#fea073",
          "400": "#fc6f3b",
          "500": "#fa4915",
          "600": "#f4300b",
          "700": "#c31f0b",
          "800": "#9b1b11",
          "900": "#7d1911",
          "950": "#430907",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",

          // 'valhalla'
          "50": "#eeeeff",
          "100": "#dfe0ff",
          "200": "#c8c6ff",
          "300": "#a9a4fd",
          "400": "#907ffa",
          "500": "#7f61f3",
          "600": "#7343e8",
          "700": "#6435cd",
          "800": "#502ea5",
          "900": "#432d82",
          "950": "#2d1d54",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#120f07",
          100: "#251d0e",
          200: "#4a3b1c",
          300: "#6f582a",
          400: "#947538",
          500: "#b99346",
          600: "#c7a86b",
          700: "#d5be90",
          800: "#e3d4b5",
          900: "#f1e9da",
          950: "#f8f4ed",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}
export default config;