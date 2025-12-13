/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2dd4bf", 
        "primary-hover": "#14b8a6", 
        "background-light": "#f8fafc", 
        "background-dark": "#0f172a", 
        "surface-dark": "#1e293b", 
        "surface-light": "#ffffff",
        "border-dark": "#334155", 
        "text-muted": "#94a3b8", 
        "text-muted-darker": "#64748b",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.75rem", 
        "lg": "1rem", 
        "xl": "1.5rem", 
        "2xl": "2rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
