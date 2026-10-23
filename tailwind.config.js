/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' }, screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        brand: {
          50: '#EEF5FC',
          100: '#D9E8F7',
          200: '#B3D0EE',
          500: '#087DBA',
          600: '#0A64A6',
          700: '#064A91',
          800: '#053A72',
          900: '#082A52',
          950: '#061B36',
        },
        teal: { 400: '#2BB7C9', 500: '#1597AE' },
        ink: { DEFAULT: '#172B3A', soft: '#33485A' },
        steel: { DEFAULT: '#64748B', light: '#94A3B8' },
        surface: { DEFAULT: '#F4F7FA', line: '#DCE4EC' },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: { sm: '2px', DEFAULT: '4px', md: '6px' },
      boxShadow: {
        card: '0 1px 2px rgba(8,42,82,.06), 0 8px 24px -12px rgba(8,42,82,.18)',
        lift: '0 2px 4px rgba(8,42,82,.08), 0 18px 40px -16px rgba(8,42,82,.28)',
      },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [],
};
