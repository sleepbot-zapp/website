/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        base: "hsl(var(--theme-bg) / <alpha-value>)",
        "base-2": "hsl(var(--theme-bg-2) / <alpha-value>)",
        text: "hsl(var(--theme-text) / <alpha-value>)",
        accent: "hsl(var(--theme-accent) / <alpha-value>)",
      }, 
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

