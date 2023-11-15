import { useContext } from 'react'
import { ThemeContext } from '../context/index'

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
