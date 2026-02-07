/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mercury: {
          dark: "#030712", // Deeper black-blue
          deep: "#0B1120",
          card: "#111827",
          primary: "#3B82F6",
          accent: "#22D3EE", // Electric Cyan
          silver: "#F8FAFC",
          muted: "#94A3B8",
          charcoal: "#1F2937"
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'ultra-widest': '1em',
        'widest': '0.5em',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
