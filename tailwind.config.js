/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        warning: '#eab308',
        danger: '#e11d48',
        success: '#22c55e',
        disable: '#6b7280',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
