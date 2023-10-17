'use client'
import { Props } from './interfaces/IProvider';
import { ThemeProvider } from 'next-themes';
 
 
export default function Provider({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}