/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    spacing: {
      149: '149%',
      559:'-559%',
      100: '100vh',
      39: '39rem',
      12: '-12rem',
      1: '1rem',
      13: '-13rem',
    },
    color: {
      'head': '#232E40',
      "gray-500": "var(--gray-500)",
        "gray-900": "var(--gray-900)",
        "primary-050": "var(--primary-050)",
        "primary-500": "var(--primary-500)",
        "white-900": "var(--white-900)",
    },
    fontFamily: {
      'Poppins': ['Poppins',],
      "text-md-medium": "var(--text-md-medium-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
    },
    fontSize:{
      64:'64px',
    },
    fontWeight:{
      700: '700',
    },
    lineHeight:{
      64:'64px',
      38: '38px',
    },
   
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//     spacing: {
//       149: '149%',
//       559:'-559%',
//       100: '100vh',
//       39: '39rem',
//       12: '-12rem',
//       1: '1rem',
//       13: '-13rem',
//     },
//     colors: {
//       "white-900": "#fff",
//       darkolivegreen: "#185013",
//       "primary-050": "#f0fdf4",
//       "gray-500": "#556987",
//       "gray-900": "#2a3342",
//       honeydew: "#f3fff2",
//       darkgreen: "#0d4808",
//       "primary-100": "#dcfce7",
//       slategray: "#6b7280",
//       darkslategray: "#232e40",
//       "gray-400": "#8896ab",
//       "gray-200": "#d5dae1",
//       "gray-800": "#333f51",
//       "primary-500": "#22c55e",
//       "gray-050": "#f7f8f9",
//       gainsboro: "#d9d9d9",
//       "secondary-500": "#a855f7",
//       "secondary-050": "#fbf7ff",
//     },
//     fontFamily: {
//       "text-md-medium": "Poppins",
//       'Poppins': ['Poppins',],

//         "text-sm-medium": "var(--text-sm-medium-font-family)",
//     },
//     fontSize:{
//       sm: "14px",
//       base: "16px",
//       xl: "20px",
//       xs: "12px",
//       "5xl": "24px",
//       "17xl": "36px",
//       "41xl": "60px",
//       lg: "18px",
//       "29xl": "48px",
//       inherit: "inherit",
//       64:'64px',
//     },
//     borderRadius: {
//       "17xl": "36px",
//     },
//     fontWeight:{
//       700: '700',
//     },
//     lineHeight:{
//       64:'64px',
//       38: '38px',
//     },
//     corePlugins: {
//       preflight: false,
//     },
   
//   },
//   plugins: [],
// };