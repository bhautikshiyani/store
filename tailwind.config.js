/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#292933',
        'light':'#f5f5f5',
        'dark800':'#1b1b28',
      },
    },
    fontFamily: {
      'helvetica': 'Helvetica Neue',
      'chronicle': 'Chronicle Display',
      'blair':'Blair ITC',
      'sans': ['Public Sans', 'sans-serif'],
     
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
