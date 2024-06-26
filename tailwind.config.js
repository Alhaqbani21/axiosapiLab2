/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#003fff',

          secondary: '#0000ff',

          accent: '#e96600',

          neutral: '#311c0f',

          'base-100': '#fff9e6',

          info: '#00a4ff',

          success: '#3f6212',

          warning: '#a85a00',

          error: '#ff003d',
        },
      },
    ],
  },
};
