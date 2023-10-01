/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        gray: {
          light: 'hsl(0, 0%, 98%)',
          DEFAULT: 'hsl(236, 33%, 92%)'
        },
        graydark: {
          lightest: 'hsl(234, 39%, 85%)',
          light: 'hsl(233, 11%, 84%)',
          DEFAULT: 'hsl(236, 9%, 61%)',
          dark: 'hsl(235, 19%, 35%)',
          darker: 'hsl(233, 14%, 35%)',
          darkest: 'hsl(237, 14%, 26%)'
        },
        blue: {
          dark: 'hsl(235, 21%, 11%)',
          custom: 'hsl(235, 24%, 19%)'
        }
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        'desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('/images/bg-mobile-light.jpg')",
        'icon-check': "url('/images/icon-check.svg')",
      }
    }
  },
  plugins: []
}
