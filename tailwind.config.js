/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-tint': 'var(--accent-tint)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        lex: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
