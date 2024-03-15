import { AppRouter } from './pages/routes'
import styled, { createGlobalStyle } from 'styled-components'
import './App.css'
import { ThemeProvider } from './context/theme.context'
//import { ToggleTheme } from './context/toggle-theme'
//import { ToggleTheme } from './component/firtsPokemons'



function App() {

 return(
  <div >
    <ThemeProvider>
      <GlobalStyle/>
      <AppRouter/>

    </ThemeProvider>
   
  </div>

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
