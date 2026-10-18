import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7dd3fc',
        secondary: '#a78bfa',
        accent: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 40px rgba(125,211,252,0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(148, 163, 184, 0.06) 0, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
