   
import { useContext } from "react";
import { ThemeContext, themes } from "./theme.context";
import { Button, DivBtThema } from "../style/firtsPoke-style";

   export  const ToggleTheme=()=>{

    const {theme, setTheme} = useContext(ThemeContext)
   

    return(
        
        <DivBtThema>
            <Button   bg={theme.bgIten} shadow = {theme.shadow}  border={theme.border}  colorfont={theme.color}    onClick={()=>setTheme(theme === themes.light ? themes.dark : themes.light)} > Theme</Button>
        </DivBtThema>
            
       
    )
      
  }

  
  

































  /* padding: 20px;
  margin: 50px;
  border-radius:10px;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
 background-color: #55c3e8;

 &:hover {
  
  font-size: 18px;
   transition: .3s;

   box-shadow: ${props=> (props.bord === 'light' ?  '4px 4px 50px 1px #1109ef ' : '2px 2px 50px 1px #1109ef   ')};

   background-color:${ props => (props.hover === '#000' ? '#5436d7' : 'aliceblue')}
   
}
` */




  