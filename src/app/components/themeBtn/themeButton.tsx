import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconMoon } from '../icons/icons';
import { IconSun } from '../icons/icons';

import './themeButton.scss';

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="toggle-mode">
      <div
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <IconSun /> : <IconMoon />}
      </div>
    </nav>
  );
}
