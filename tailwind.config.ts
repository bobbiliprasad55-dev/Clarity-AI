import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        foreground: 'var(--color-text)',
        muted: 'var(--color-text-secondary)',
        brand: {
          navy: '#1E3A8A',
          slate: '#E2E8F0',
          DEFAULT: 'var(--color-brand)',
        },
        companion: {
          doc: {
            DEFAULT: '#2563EB',
            tint: 'var(--color-doc-tint)',
            text: 'var(--color-doc-text)',
          },
          bill: {
            DEFAULT: '#16A34A',
            tint: 'var(--color-bill-tint)',
            text: 'var(--color-bill-text)',
          },
          privacy: {
            DEFAULT: '#7C3AED',
            tint: 'var(--color-privacy-tint)',
            text: 'var(--color-privacy-text)',
          },
        },
        status: {
          success: '#0F766E',
          info: '#0369A1',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
      borderRadius: {
        card: '16px',
        btn: '10px',
        hero: '24px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(16, 24, 40, 0.06)',
        'card-hover': '0 8px 30px rgba(16, 24, 40, 0.10)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
