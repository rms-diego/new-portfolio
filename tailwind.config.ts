import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1300px',

        lg: { max: '1200px' },

        md: { max: '768px' },

        sm: { max: '600px' },

        tall: { raw: '(max-height: 600px)' },
      },

      colors: {
        'border-image': 'var(--blue-600)',
        'primary-color': 'var(--blue-900)',
        'background-icons': 'var(--blue-400)',
        'title-color': 'var(--titles-color)',
      },
    },
  },
  plugins: [],
};
export default config;
