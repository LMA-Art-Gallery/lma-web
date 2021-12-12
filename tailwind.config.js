const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Fira Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      primary: 'var(--color-brand-primary)',
      secondary: 'var(--color-brand-secondary)',
      tetriary: 'var(--color-brand-tetriary)',
      coolGray: 'var(--color-brand-cool-gray)',
      primaryLigthen: 'var(--color-brand-primary-lighten)',
      neutral: {
        1: 'var(--color-neutral-1)',
        2: 'var(--color-neutral-2)',
        3: 'var(--color-neutral-3)',
        4: 'var(--color-neutral-4)',
        5: 'var(--color-neutral-5)',
      },
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      height: {
        "screen/2": "40vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
