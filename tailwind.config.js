/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c1ff',
          300: '#66a3ff',
          400: '#3384ff',
          500: '#2EA44F', // Bright Green
          600: '#1E7048', // Medium Green
          700: '#155c3a',
          800: '#0d482c',
          900: '#062940', // Dark Blue
        },
        gold: {
          50: '#e6f7ed',
          100: '#ccefdb',
          200: '#99dfb7',
          300: '#66cf93',
          400: '#33bf6f',
          500: '#2EA44F', // Bright Green
          600: '#1E7048', // Medium Green
          700: '#155c3a',
          800: '#0d482c',
          900: '#06341e',
        },
        success: {
          100: '#d4edda',
          500: '#2EA44F',
          900: '#155c3a',
        },
        warning: {
          100: '#fff3cd',
          500: '#2EA44F',
          900: '#155c3a',
        },
        error: {
          100: '#f8d7da',
          500: '#dc3545',
          900: '#5e171e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.2' }],
        'display-md': ['3rem', { lineHeight: '1.2' }],
        'display-sm': ['2.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '98': '24.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};