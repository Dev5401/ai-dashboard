import { useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setDark] = useState(false)

  const toggleDarkMode = () => setDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
