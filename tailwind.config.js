// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // 🟢 Very important
  theme: {
    extend: {
      colors: {
        white: {
          50:  "#ffffff",
          100: "#fefefe",
          200: "#fcfcfc",
          300: "#fafafa",
          400: "#f5f5f5",
          500: "#f0f0f0",
          600: "#eaeaea",
          700: "#e5e5e5",
          800: "#e0e0e0",
          900: "#dbdbdb",
        },
      },
    },
  },
  plugins: [],
}
