const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      spacing: {
        'side': '20px',
      },
      maxWidth: {
        'dk-maxW': '950px'
      },
      colors: {
        'dk-blue': colors.sky,
        'dk-primary': colors.zinc,
        'dk-secondary': colors.slate,
        'dk-text': colors.white,
        'dk-text-alpha': colors.gray,
        'dk-hl': colors.yellow,
      },
      fontFamily: {
        'dk-sans': "'Poppins', Roboto, Helvetica, Arial, sans-serif",
        'dk-mono': "'Fira Code', sans-serif, monospace",
        'dk-heading': "'Poppins', 'Roboto', sans-serif",
        'dk-fa': 'FontAwesome',
      },
      gridTemplateColumns: {
        'dk-grid': "repeat(auto-fit, minmax(300px, 395px))"
      },
      borderRadius: {
        '4xl': '2em'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
