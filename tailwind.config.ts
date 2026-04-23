import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:                    '#002045',
        'on-primary':               '#ffffff',
        'primary-container':        '#1a365d',
        secondary:                  '#006d40',
        'on-secondary':             '#ffffff',
        'secondary-container':      '#8ef5b5',
        'on-secondary-container':   '#007243',
        'secondary-fixed-dim':      '#74db9d',
        surface:                    '#f7fafc',
        'surface-container-low':    '#f1f4f6',
        'surface-container':        '#ebeef0',
        'surface-container-high':   '#e5e9eb',
        'on-surface':               '#181c1e',
        'on-surface-variant':       '#43474e',
        'outline':                  '#74777f',
        'outline-variant':          '#c4c6cf',
        error:                      '#ba1a1a',
        'inverse-surface':          '#001529',
      },
      boxShadow: {
        card:    '0 4px 12px rgba(26,54,93,0.08)',
        'card-lg': '0 8px 32px rgba(26,54,93,0.14)',
        form:    '0 8px 40px rgba(26,54,93,0.18)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
