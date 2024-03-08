/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-gray-1': '#f3f3f3',
        'primary-color': '#0792B7',
        'text-color': 'rgba(0, 0, 0, 0.38)',
        'b-gray-1': '#e7ecf1',
        gray: {
          50: '#f3f3f3',
          100: '#e3e3e3',
          200: '#C0C0BF',
          300: '#ACACAA',
          400: '#989895',
          500: '#838381',
          600: '#6F6F6D',
          700: '#5A5A58',
          800: '#464644',
          900: '#313130'
        },
        red: { 
          50: '#f8dee1',
          100: '#f2bcc3',
          200: '#eb9ba5',
          300: '#e47a88',
          400: '#de586a',
          500: '#d7374c',
          600: '#bc2539',
          700: '#961e2e',
          800: '#711622',
          900: '#4b0f17'
        },
        blue: { 
            50: '#d4f5fd',
            100: '#a3e9fb',
            200: '#7cdffa',
            300: '#41d1f8',
            400: '#09b1de',
            500: '#0097B1',
            600: '#007083',
            700: '#045b72',
            800: '#034050',
            900: '#02242d'
        },
        yellow: { 
            50: '#ffe5b0',
            100: '#ffde9b',
            200: '#ffd172',
            300: '#ffc44a',
            400: '#ffb621',
            500: '#f7a600',
            600: '#c98700',
            700: '#9b6800',
            800: '#6d4900',
            900: '#3f2b00'
        },
        green: {
            400: '#2FA01D'
        } 
      },
      fontFamily: {
        'lato-r': ['"LatoRegular"', "sans-serif"],
        'lato-b': ['"LatoBlack"', "Helvetica", "Arial", "sans-serif"]
      }     
    },
  },
  plugins: [],
};

