import { ThemeProvider } from '@mui/material'
import MainPage from './components/pages/MainPage'
import { themeOptions } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <MainPage />
    </ThemeProvider>
  )
}

export default App
