import { createContext, useState } from "react"

const blueDark   =  '#1109ef';
const purpleCard =  '#5436d7';


export const ThemeContext = createContext({})

export const themes ={
  dark:{
    background:'#000',
    bgDetails :'#1e1e1e',
    color:'#fff',
    border: '2px solid rgb(56, 56, 223)' ,
    bgIten: '#1e1e1e',
    shadow:  `2px 2px 20px 1px ${blueDark}`,
    bgHoverCard: purpleCard,
    colorTitule:'#3e43da',
    colorInfo:'#141114'
  },

  light:{
    background: '#8fadc9',
    bgDetails :'#6c87a5',
    color:'#000',
    border: '2px solid aliceblue',
    bgIten: '#6c87a5',
    shadow:   `4px 4px 20px 1px ${blueDark} `,
    bgHoverCard: 'aliceblue',
    colorTitule:'#bbb1b1',
    colorInfo:'#6487af'
  }
  // #bbb1b1
} 


export const ThemeProvider = ({children})=>{

  const [theme, setTheme] = useState(themes.light)



  return(
    <ThemeContext.Provider value={{theme, setTheme}} >
      {children}
    </ThemeContext.Provider>
  )


}