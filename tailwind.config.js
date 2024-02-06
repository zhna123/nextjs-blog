/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
        serif: ['var(--font-playfair_display)']
      },
      colors: {
        blog_green: '#43766C',
        blog_bg_green: '#F8FAE5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

