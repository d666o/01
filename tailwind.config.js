/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      face: ['Inter', 'sans-serif'],
    },
    extend: {
      animation: {
        slide: 'slide 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        text: 'text 0.6s both',
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        text: {
          '0%': {
            'text-shadow': '0 0 0 rgba(0, 0, 0, 0)',
          },
          '100%': {
            'text-shadow': '0 0 10px rgba(0, 0, 0, 0.35)',
          },
        },
      },
    },
    plugins: [],
  },
};
