/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#272829",
        "light-gray": "#3D3E42",
        "text-clr": "#b4b4b4",
        "yellow-text": "#FFC86B"
      },
      fontFamily: {
        "poppins-light": ['poppins-light'],
        "poppins-regular": ['poppins-regular'],
        "poppins-medium": ['poppins-medium'],
        "poppins-semibold": ['poppins-semibold'],
        "poppins-bold": ['poppins-bold'],
        "poppins-extraBold": ['poppins-extraBold'],
      },
    },
  },
  plugins: [],
}

