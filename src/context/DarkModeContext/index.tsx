'use client';
import useEventListener from '@/hooks/useEventListener';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react';

type ToggleEvent = React.MouseEvent<HTMLElement>;

interface DarkModeContextType {
  isDark: boolean;
  followSystem: boolean;
  toggleDarkMode: (event: ToggleEvent, darkMode: string) => void;
  followSystemTheme: (event: ToggleEvent) => void;
  matchMedia: MediaQueryList | null;
}
/**
 * @author huaqiang
 * 1. 创建一个 DarkModeContext 上下文
 * 2. 创建一个 DarkModeProvider 组件，用于提供上下文
 * 3. 创建一个 useDarkModeToggle 自定义 hook，用于获取上下文
 * 4. 在 DarkModeProvider 组件中，使用 useDarkModeToggle 获取上下文，并提供给子组件
 */
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');

  const [isDark, setIsDark] = useState<boolean>(() => {
    const theme = localStorage.getItem('theme');
    return (theme === 'dark' || (!theme && matchMedia?.matches)) ?? false;
  });

  const [followSystem, setFollowSystem] = useState<boolean>(() => {
    return !localStorage.getItem('theme');
  });

  const transitionReady = (event: ToggleEvent, onCallback: () => void) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (document as any).startViewTransition
      ? (document as any).startViewTransition(async () => {
          onCallback();
        })
      : { ready: Promise.resolve() };

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 600,
          easing: 'ease-out',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      );
    });
  };

  const toggleDarkMode = (event: ToggleEvent, darkMode: string) => {
    if (isDark === (darkMode === 'dark') && !followSystem) return;
    else if (!isDark && darkMode === 'light' && !followSystem) return;
    transitionReady(event, () => {
      localStorage.setItem('theme', darkMode);
      setIsDark(darkMode === 'dark');
      setFollowSystem(false);
    });
  };

  const followSystemTheme = (event: ToggleEvent) => {
    if (followSystem) return;
    transitionReady(event, () => {
      localStorage.removeItem('theme');
      setIsDark(matchMedia?.matches ?? false);
      setFollowSystem(true);
    });
  };

  const updateTheme = useCallback(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && matchMedia?.matches)) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [matchMedia?.matches]);

  useEffect(() => {
    updateTheme();
  }, [isDark, followSystem, updateTheme]);

  useEventListener('storage', updateTheme);

  useEffect(() => {
    const handleChange = () => {
      if (followSystem) {
        setIsDark(matchMedia?.matches ?? false);
      }
    };
    matchMedia?.addEventListener('change', handleChange);
    return () => {
      matchMedia?.removeEventListener('change', handleChange);
    };
  }, [followSystem, matchMedia]);

  return (
    <DarkModeContext.Provider
      value={{
        isDark,
        followSystem,
        toggleDarkMode,
        followSystemTheme,
        matchMedia
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeToggle = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkModeToggle must be used within a DarkModeProvider');
  }
  return context;
};

export default DarkModeProvider;
