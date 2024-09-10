export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      medium: '750px',
    },
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
        blackops: ['Black Ops One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

