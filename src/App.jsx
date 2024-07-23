
import { ThemeProvider } from './contexts/theme'
import { AppRouter } from './routes'
import './App.css'
import { createGlobalStyle } from 'styled-components'

function App() {


  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  )
}



const GlobalStyle = createGlobalStyle`
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  list-style: none;
  font-family: 'Poppins', sans-serif;
  
 }
`

export default App
