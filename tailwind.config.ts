import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
      fontFamily: {
        'rowdies': ['Rowdies', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'readex': ['Readex Pro', 'sans-serif'],
      },
      colors: {
        // Original shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Jharkhand Tourism Brand Colors
        primary: {
          DEFAULT: "#10B981", // Main green from eco tokens
          50: "#DCFCE7",
          100: "#BBF7D0",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          900: "#064E3B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
        },
        eco: {
          green: "#10B981",
          "green-light": "#22C55E",
          "green-bg": "#D1FAE5",
          "green-dark": "#059669",
        },
        jharkhand: {
          blue: "#1A2784",
          "blue-light": "#0097B2",
          "blue-gradient": "#BBE2D1",
          orange: "#FB923C",
          yellow: "#FACC15",
        },
        header: {
          dark: "rgba(0, 0, 0, 0.83)",
          overlay: "rgba(0, 0, 0, 0.60)",
        },
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

        // Keep existing for backward compatibility
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
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(270deg, rgba(217, 217, 217, 0.00) 0%, rgba(109, 109, 109, 0.19) 25%, rgba(0, 0, 0, 0.38) 49.52%, rgba(0, 0, 0, 0.56) 75%, rgba(0, 0, 0, 0.75) 100%)',
        'eco-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 70.71%)',
        'jharkhand-gradient': 'linear-gradient(180deg, #1A2784 0%, #0097B2 100%)',
        'heritage-gradient': 'linear-gradient(180deg, #0097B2 0%, #BBE2D1 100%)',
        'activity-gradient': 'linear-gradient(90deg, #06996B 0%, #1DD599 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: 'slideIn 0.5s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
