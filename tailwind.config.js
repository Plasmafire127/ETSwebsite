/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'green': '#7ec281',
      'nav-purple': '#332945',
      'accent-purple': '#4d455c',
      'accent-dark': '#2D292F',
      'orange': '#c2a47e',
      'background': '#231c24',
      'gray':'#D9D9D9',
      'white':'#ffffff',
      'black':'#000000',
    },
    extend: {
      spacing: {
        '-0.25': '-0.25rem', //negative spacing
      },
      fontFamily: {
        'plex-mono': ['IBM Plex Mono', 'monospace'],
        'space-grotesk':['Space Grotesk','monospace'],
        'keania-one':['Keania-one','monospace'],
      },
    },
  },
  plugins: []
};