/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in `src` for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        nunito: ["Nunito", "serif"],
      },
    },
  },
  plugins: [],
};
