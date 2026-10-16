/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Young Serif"', 'Georgia', 'serif'],
        ar: ['"Amiri"', '"Scheherazade New"', '"Noto Naskh Arabic"', 'serif'],
        'ui-ar': ['"Noto Naskh Arabic"', '"Amiri"', 'serif'],
      },
      colors: {
        paper: 'var(--paper)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        soft: 'var(--soft)',

        // Tajwid Categories
        izhar: {
          DEFAULT: 'var(--izhar)',
          bg: 'var(--izhar-bg)',
        },
        idgham: {
          DEFAULT: 'var(--idgham)',
          bg: 'var(--idgham-bg)',
        },
        iqlab: {
          DEFAULT: 'var(--iqlab)',
          bg: 'var(--iqlab-bg)',
        },
        ikhfa: {
          DEFAULT: 'var(--ikhfa)',
          bg: 'var(--ikhfa-bg)',
        },
        qalqalah: {
          DEFAULT: 'var(--qalqalah)',
          bg: 'var(--qalqalah-bg)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          bg: 'var(--gold-bg)',
        },
      },
      borderRadius: {
        card: 'var(--r)',
      },
      animation: {
        'enter': 'enter 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'drop': 'drop 0.6s cubic-bezier(0.2, 0.9, 0.25, 1.2) both',
        'pop': 'pop 0.45s cubic-bezier(0.2, 0.9, 0.25, 1.3) both',
        'paint': 'paint 0.5s ease backwards',
        'travel': 'travel 4.5s ease-in-out infinite',
        'ghunnah-pulse': 'ghunnahPulse 1.8s ease-in-out infinite',
        'qalqalah-bounce': 'qalqalahBounce 1.2s ease-in-out infinite',
      },
      keyframes: {
        enter: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drop: {
          from: { opacity: '0', transform: 'translateY(-26px) scale(0.9)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        pop: {
          from: { opacity: '0', transform: 'scale(0.5)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        paint: {
          from: { color: 'var(--ink)', borderBottomColor: 'transparent' },
        },
        travel: {
          '0%, 8%': { left: '0%' },
          '38%, 46%': { left: '50%' },
          '76%, 100%': { left: '100%' },
        },
        ghunnahPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85', filter: 'drop-shadow(0 0 0px var(--idgham))' },
          '50%': { transform: 'scale(1.08)', opacity: '1', filter: 'drop-shadow(0 0 12px var(--idgham))' },
        },
        qalqalahBounce: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-14px) scale(1.15)' },
          '60%': { transform: 'translateY(0) scale(0.95)' },
          '80%': { transform: 'translateY(-4px) scale(1.03)' },
        },
      },
    },
  },
  plugins: [],
}
