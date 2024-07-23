import { Link } from "react-router-dom"
import { Btn } from "../pokeList/styleList"
import { ThemeContext } from "../../contexts/theme"
import { useContext } from "react"


export const BtnReturn = () => {

  const { theme } = useContext(ThemeContext)

 

  return (

  <Link to='/' >  
    <Btn   shadowcor={theme.shadow} bg={theme.bgDetails} border={theme.border} cor={theme.border} >Return</Btn>
  </Link>  


  )
}

