import styled, { css, keyframes } from "styled-components";




export const ContBtnTheme =  styled.div`
position: absolute;
left: 10px;
bottom: 30px;
@media(max-width: 721px){
position: static;
}

`


export const ButtonTheme = styled.button`
background-color:aliceblue;
color: ${props=> props.colorfont};
margin: 10px;
padding: 20px;
width: 110px;
height: 20px;
border: 3px solid #6c87a5;
border-radius: 20px;
cursor: pointer;
font-family: 'Kanit', sans-serif;
font-weight: 400;
display: flex;
align-items: center;
position: relative;

&:hover {
 font-size: 18px;
 transition: 0.4s;
 box-shadow: ${props => (props.shadow)};
}
`

const moveMoon = keyframes `
   
    0%{
        transform: translateX(0px);
    }

    100%{
      transform: translateX(60px);
    }
`



const moveSummer = keyframes `
   
    0%{
        transform: translateX(60px);
    }

    100%{
      transform: translateX(0px);
    }
`


export const ImgBtnTheme = styled.img `
position: absolute;
left: 5px;
height:30px ;
text-align: center;
background:${props=>props.bg} ;
animation:${props=> props.imgBg  === true && css `${moveMoon} 3s  forwards`} ;
animation:${props=> props.imgBg === false && css `${moveSummer} 3s forwards`}
` 


// 