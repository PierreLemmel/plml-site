module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '900': '#7d3c0a',
          '800': '#bb5a10',
          '700': '#ed7a22',
          '600': '#f29f61',
          '500': '#f7c59f',
          '400': '#f8cba9',
          '300': '#f9d6bc',
          '200': '#fbe2cf',
          '100': '#fdeee2',
          '50': '#fef9f5',
        },
        secondary: {
          '900': '#0e1119',
          '800': '#151926',
          '700': '#1c2132',
          '600': '#232a3f',
          '500': '#2A324B',
          '400': '#384364',
          '300': '#546497',
          '200': '#818eb8',
          '100': '#b3bbd5',
          '50': '#e6e8f1',
        },
      },
      fontSize: {
        '10xl': '7.5em',
        '12xl': '9em'
      }
    },
    fontFamily: {
      handwritten: ['Aesthetic Notes', 'sans-serif'],
      menu: ['BebasNeue', 'sans-serif']
    }
  }
}