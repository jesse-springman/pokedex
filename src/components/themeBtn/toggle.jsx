import { useContext, useState } from "react";
import { themes } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/theme";
import { ButtonTheme, ContBtnTheme, ImgBtnTheme } from "./styleBtn"




export const ToggleTheme = () => {
    

    const { theme, setTheme } = useContext(ThemeContext)
    const [alterImgBtn, setAlter] = useState(false)

    const moonAndSummer = theme.imgbg
    
    function toggle() {
        setTheme(theme === themes.light ? themes.dark : themes.light)
        setAlter(true)

        if(alterImgBtn && themes.dark){
            setAlter(false)
        }
        
    }

    return (

        <ContBtnTheme>
            <ButtonTheme  shadow={theme.shadow} border={theme.border} colorfont={theme.color} onClick={()=>toggle()} >
             <ImgBtnTheme imgBg={alterImgBtn} src={moonAndSummer} />
            </ButtonTheme>

           
        </ContBtnTheme>
    )
}

