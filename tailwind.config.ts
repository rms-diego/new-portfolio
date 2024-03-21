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
        xl: { max: '1200px' },

        lg: { max: '1023px' },

        md: { max: '768px' },

        sm: { max: '639px' },

        tall: { raw: '(max-height: 600px)' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'border-image': 'var(--blue-600)',
        'primary-color': 'var(--blue-900)',
        'background-icons': 'var(--blue-400)',
      },
    },
  },
  plugins: [],
};
export default config;
