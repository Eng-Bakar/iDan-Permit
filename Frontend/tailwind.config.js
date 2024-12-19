/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'deepBlue': '#2C3E50',      // Custom Deep Blue
        'skyBlue': '#407BFF',       // Custom Sky Blue
        // 'skyBlue': '#3498DB',       // Custom Sky Blue
        'lightGray': '#ECF0F1',     // Custom Light Gray
        'lightBlue': '#F5F6FA',     // Custom Light Blue for Admin Dashboard Background
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],  // Custom font for body text
        Nunito: ['Nunito Sans', 'sans-serif'],  // Custom font for body text
      },
    },
  },
  plugins: [],
}

// Accepted color code Green 00B69B
// Pending color code Blue 6226EF
// Rejected color code Red EF3826