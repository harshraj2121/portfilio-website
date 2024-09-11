export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      medium: '750px',
      'xsm': '440px',  // Custom breakpoint for 440px
      msm: '560px',  // Custom breakpoint for 560px
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

