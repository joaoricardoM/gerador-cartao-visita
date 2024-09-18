import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '460px',  // Adiciona o breakpoint personalizado
        'xss': '425px',
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
        darker: ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
