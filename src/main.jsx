import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import {Details} from './pages/Details'
import { Home } from './pages/Home'
import { SingIn } from './pages/SingIn'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SingIn/>
    </ThemeProvider>
  </React.StrictMode>,
)
