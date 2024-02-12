import  { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme.context"
import { Button } from "../../style/firtsPoke-style"

export const ButtonReturn = () =>{
    const { theme } = useContext(ThemeContext)

    return(
      <Link to="/">
       <Button  bg={theme.bgIten} border={theme.border} shadow = {theme.shadow}  colorfont={theme.color}   >
        Return
       </Button> 
       </Link>
    )
}


