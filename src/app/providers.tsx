'use client'
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface Props {
  children?: ReactNode
}

export default function Provider({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}