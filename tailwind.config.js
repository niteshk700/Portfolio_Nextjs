// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,ts,jsx,tsx}', // Adjust these paths based on your project structure
    ],
    theme: {
      extend: {
        // Example: extending black with custom shades
        colors: {
          black: {
            50:  '#f2f2f2',
            100: '#e6e6e6',
            200: '#cccccc',
            300: '#b3b3b3',
            400: '#999999',
            500: '#808080',
            600: '#666666',
            700: '#4d4d4d',
            800: '#333333',
            900: '#191919',
            1000: '#000000', // True black if needed
          },
        },
      },
    },
    plugins: [],
  };
  