import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import './lib.css'

import { HomePage } from './pages/home'
import { GlobalStyle, defaultTheme } from './ui/theme'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('react-app'))
