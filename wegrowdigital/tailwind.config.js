// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to your file paths
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'maven': ['"Maven Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
