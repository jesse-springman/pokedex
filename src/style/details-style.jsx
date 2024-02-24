import styled from "styled-components";


export const Cont = styled.section`
    background: ${props => props.bg};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    height: 100% ;

    @media(max-width: 721px){
        height: auto
    }
` 

export const Div = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 20px;
 padding:  25px;
 background-color:${props => props.bgcard};
 border-radius: 20px;
 border: ${props => props.border}  ;
 width: 600px;
 box-shadow: ${props => props.shadow};



 @media(max-width: 700px){
  width:300px
 }
`


export const ImgPoke = styled.img`
width: 200px;

@media(max-width: 700px){
  width:180px
 }

`

export const DivInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: ${props => props.border};
padding: 10px;
border-radius: 20px;
margin-bottom: 20px;
background-color: ${props => props.infocor};

`

export const Name = styled.h1`
    margin: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #fff ;
    font-size: 35px;
    font-weight: 700;
`

export const Titulo = styled.h3`
font-family: 'Kanit', sans-serif;
margin-bottom:10px ;
color: ${props => props.cor};
font-size: 30px;
font-weight: 700;

`

export const Valor = styled.h3`
font-weight: 200;

margin-left: 10px;


`

export const Lista = styled.ul`
 display: flex;
 flex-wrap: wrap;
 gap: 20px;
 margin-bottom: 20px;
 justify-content: center;
 `

 export const DivType = styled.div`
 display: flex;
 align-items: center;
 `
 export const P = styled.p`
 font-size: 18px;
 `

export const BtReturn = styled.button`
margin-top: 40px;
padding: 20px;
border-radius: 8px;
border: 2px solid #000;
cursor: pointer;

&:hover{
    box-shadow: ${props => props.shadow};
}
`
