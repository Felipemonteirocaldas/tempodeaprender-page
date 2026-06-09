/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* Azul claro — PRIMÁRIO (corpo do uniforme e fundos suaves) */
          sky:        '#0077FF',
          'sky-mid':  '#0077FF',
          'sky-light':'#E3F2FD',
          'sky-pale': '#EBF5FB',

          /* Azul escuro — SECUNDÁRIO */
          navy:        '#1B52AE',
          'navy-mid':  '#2C6DF5',
          'navy-light':'#4C85F5',

          /* Verde — detalhe (listras do uniforme e lápis) */
          green:        '#2BB673',
          'green-mid':  '#28A745',
          'green-light':'#D4EDDA',

          /* Laranja — detalhe (listras do uniforme e alegria) */
          orange:        '#FFB800',
          'orange-mid':  '#E96A00',
          'orange-light':'#FDE8D0',

          /* Acentos da Imagem */
          red:          '#FF5E7E',
          yellow:       '#FFB800',
          'blue-accent':'#3282F6',

          /* Neutros */
          white:    '#FFFFFF',
          gray:     '#F4F8FC',
          'gray-mid':'#5D7285',
          dark:     '#0B1F3A',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      gridTemplateColumns: {
        bento: 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [],
}
