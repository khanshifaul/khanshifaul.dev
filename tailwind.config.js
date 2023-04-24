/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'Acme': ['Acme', 'sans-serif'],
      'Bacode': ['Bacode', 'sans-serif'],
      'Broadway-bt': ['Broadway-bt', 'sans-serif'],
      'Greenhouse-gas': ['Greenhouse-gas', 'sans-serif'],
      'DancingScript': ['DancingScript', 'sans-serif'],
      'Quick-starter': ['Quick-starter', 'sans-serif'],
      'Impact': ['Impact', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#6610f2',
        'accent': '#1F2421',
        'dark-background': '#222222',
        'dark-text': '#ffffff',
        'light-background': '#EAE8FF',
        'light-text': '#222222',
        'retro-gradient': 'linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}