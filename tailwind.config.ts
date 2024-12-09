import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["class"],
  darkMode: 'class',
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
      sm: "640px",     
      md: "768px",     
      lg: "1024px",    
      xl: "1280px",    
      "2xl": "1400px", 
      },
    },
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
      colors: {
        background: "hsl(0, 0%, 0%)",
        text: "hsl(0, 0%, 100%)",
        primary: "#F5F5F7",
        secondary: "#3571F0",
        white: "#FFFFFF",
        tertiary: "#EBF1FE",
      },
      typography: {
        // h1: {
        //   fontSize: "3.625rem",
        //   fontWeight: "700",
        //   color: "#FFFFFF",
        //   font: "gotham",
        // },
        p: {
          fontSize: "39px",
          color: "#475569",
          marginBottom: "1.5rem",
        },
        blogText: {
          fontSize: "1.25rem",
          fontWeight: "400",
          color: "#F5F5F7",
          font: "gotham",
        },
      },
      backgroundImage: {
        'background-texture': "url('/assets/images/bgVectorImg.png')",
        'background-circle': "url('/assets/images/circleBg1.png')",
        'card-bg': "url('/assets/images/cardElipBg.png')",
        'card-bg1': "url('/assets/images/bgVector.png')",
        'ellips-bg': "url('/assets/images/bgEllips.svg')",
        'animation-bg': "url('/assets/images/circalAnimationBg.png')",
      
        'gradient-navBorder': 'linear-gradient(180deg, rgba(143, 178, 251, 0.2), rgba(143, 178, 251, 0.12))',
        'gradient-border': 'linear-gradient(90deg, rgba(133, 132, 158, 0.4), rgba(116, 116, 128, 0.3))',
        'gradient-card-border': 'linear-gradient(180deg, rgba(133, 132, 158, 0.4), rgba(116, 116, 128, 0.3))',
        'gradient-btn': 'linear-gradient(180deg, rgba(133, 132, 158, 0.4), rgba(116, 116, 128, 0.3))',
      },  
      boxShadow: {
        'custom-hover': '4px 4px 10px rgba(160, 124, 254, 0.5)',
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
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },

        // custome animation for card
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
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
        "slide-in-right": "slideInRight 2s ease-out forwards",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
