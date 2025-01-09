/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "insta-logo": "radial-gradient(circle at 30% 110%, #ffdb8b 0%, #ee653d 25%, #d42e81 50%, #a237b6 75%, #3e57bc 100% )"
      },
      colors: {
        "dark-gray": "#272829",
        "light-gray": "#3D3E42",
        "text-clr": "#b4b4b4",
        "yellow-text": "#FFC86B",
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

