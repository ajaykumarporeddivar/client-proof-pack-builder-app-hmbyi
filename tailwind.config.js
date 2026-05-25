/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#4F46E5', // A strong indigo for primary actions and branding
        accent: '#22C55E', // A vibrant green for success and positive indicators
        statusSuccess: '#10B981', // Specific green for 'approved' status
        statusPending: '#F59E0B', // Orange for 'in progress' or 'new' status
        statusBlocked: '#EF4444', // Red for 'blocked' status
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}