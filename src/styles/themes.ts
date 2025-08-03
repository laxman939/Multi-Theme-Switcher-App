export type ThemeOption = 'theme1' | 'theme2' | 'theme3' ;

export const themeOptions: ThemeOption[] = ['theme1', 'theme2', 'theme3'];

export const themes = {
  theme1: {
    background: '#ffffff',
    color: '#222',
    fontFamily: 'sans-serif',
    layout: 'minimal',
  },
  theme2: {
    background: '#181b21',
    color: '#fff',
    fontFamily: 'serif',
    layout: 'sidebar',
  },
  theme3: {
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    color: '#390099',
    fontFamily: '"Pacifico", cursive',
    layout: 'cards',
  }
} as const;