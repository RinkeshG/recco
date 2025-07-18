/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      // expose your CSS‑variable colours & fonts to Tailwind
      colors: {
        accent: 'var(--accent)',
        'accent-tint': 'var(--accent-tint)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        lex:  ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
