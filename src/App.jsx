import { AppRouter } from './pages/routes'
import styled, { createGlobalStyle } from 'styled-components'
import './App.css'

function App() {
 return(
  <>
    <AppRouter/>
    <GlobalStyle/>
  </>
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
      }
  `


export default App
