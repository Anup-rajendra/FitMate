import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        midnight: "#030014",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chattrWhite: "rgb(255 255 255 / 1)", // white
        chattrBlack: "rgb(24 24 27 / 1)", // zinc-900
        chattrPitchBlack: "rgb(9 9 11 / 1)", // zinc-950
        chattrPrimary: "rgb(139 92 246 / 1)", // violet-500
        chattrPrimaryDark: "rgb(124 58 237 / 1)", // violet-600
        chattrSecondary: "rgb(113 113 122 / 0.8)", // zinc-500/80
        chattrSecondaryDark: "rgb(244 244 245 / 0.6)", //zinc-100/60
        chattrGray: "rgb(212 212 216 / 0.9)", // zinc-300/90
        chattrGrayDark: "rgb(244 244 245 / 0.15)", //zinc-100/15
        chattrText: "rgb(39 39 42 / 1)", // zinc-800
        chattrTextDark: "rgb(244 244 245 / 1)", // zinc-100
        chattrBackgroundMuted: "rgb(228 228 231 / 0.7)", //zinc-200/70
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        chattrRoundedSmall: "0.5rem",
        chattrRoundedMedium: "0.85rem",
        chattrRoundedLarge: "1rem",
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
        chattrLoader: {
          from: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            opacity: "0.25",
            transform: "translate3d(0, -0.2rem, 0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        chattrLoader: "chattrLoader 0.5s infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
