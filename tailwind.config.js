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
        'dk-blue': '#8bd3e1',
        'dk-primary': '#1e1e1e',
        'dk-secondary': '#262627',
        'dk-text': '#ffffff',
        'dk-text-alpha': '#8a8a8a',
        'dk-hl': '#fff400',
      },
      fontFamily: {
        'dk-sans': "'Merriweather', Roboto, Helvetica, Arial, sans-serif",
        'dk-mono': "'Fira Code', sans-serif, monospace",
        'dk-heading': "'Roboto', sans-serif",
        'dk-fa': 'FontAwesome',
      },
      gridTemplateColumns: {
        'dk-grid': "repeat(auto-fit, minmax(300px, 395px))"
      },
    },
  },
  plugins: [],
}
