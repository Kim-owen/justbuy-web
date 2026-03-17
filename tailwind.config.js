/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        africa: ["Africa"],
        ariadne: ["Ariadne"],
        vivaldi: ["Vivaldi"],
        delap: ["Delap"],
        credit: ["Kredit"],
        montserrat: ["Montserrat"]
      }
    },
    gridTemplateColumns: {
      'tapbarmenu': '1fr 1fr 1fr 1fr',
      'otp_grid': '1fr 1fr 1fr 1fr 1fr 1fr',
      'filter_btns': 'auto auto 1fr 1fr',
      'category_grid': 'repeat(2, minmax(0, 1fr))',
      'featured_grid': 'repeat(1, minmax(0, 1fr))',
      'upload_thumbnail_grid': 'repeat(5, minmax(0, 1fr))',
      'product_list_item': '130px, 1fr',
      'product_tab': 'repeat(3, minmax(0, 1fr))'
    },
    gridTemplateRows: {
      'tapbarmenu': '100%',
      'dashboard_services': 'repeat(4, minmax(0, 1fr))',
      'cars_grid': '1fr 1fr',
      'habits': '1fr 1fr 1fr 1fr'
    },
  },
  plugins: [],
}