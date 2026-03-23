'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // ✅ START WITH UNDEFINED to prevent hydration mismatch
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check system preference safely
    let prefersDark = false;
    try {
      prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      prefersDark = false;
    }
    
    // Check localStorage safely
    let savedTheme: Theme | null = null;
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        savedTheme = stored;
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    
    // Determine initial theme
    let initialTheme: Theme = prefersDark ? 'dark' : 'light';
    if (savedTheme) {
      initialTheme = savedTheme;
    }
    
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (theme: Theme) => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    } catch (e) {
      // Ignore errors
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // Ignore localStorage errors
    }
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // ✅ CRITICAL: Return SAME structure during SSR and CSR
  // Don't return loading state - just return children with fallback
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {/* ✅ Add a wrapper div that's always present */}
      <div className={`min-h-screen ${mounted ? '' : 'invisible'}`}>
        {mounted ? children : (
          // ✅ Empty placeholder with same dimensions
          <div style={{ visibility: 'hidden' }}>
            {children}
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}