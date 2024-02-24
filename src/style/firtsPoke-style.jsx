import styled from "styled-components";


export const SectionContainer = styled.section `
background-color:${props => props.bgall} ;
height: ${props => props.altura  === true && !props.responsive ? '' : '100vh'};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 
 position: relative;
  
 @media(max-width: 700px){
   height: ${props => props.responsive  === true ? '' : '100%'};
    }
`




export const Input = styled.input`
margin: 50px;
padding: 5px;
border-radius: 5px;
border: 2px solid #1109ef;
width: 300px;
outline: none;
color:black;


`

export const Logo = styled.img `
height: 60px;
margin: 20px;
`


export const Ul = styled.ul `
margin: 30px;
list-style: none;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 15px;

@media(max-width: 700px){
      grid-template-columns: repeat(2, 1fr);
    }
`
export const DivFil = styled.div`
height: 100%;
`

export const Iten = styled.li`
  padding: 12px;
  max-width: 150px;
  text-align: center;
  border: ${props => (props.bord)} ;
  border-radius: 10px;
  cursor: pointer;
  
&:hover{
   font-size: 18px;
   transition: .4s;
   box-shadow: ${props=> (props.shadow)};
   background-color:${ props => (props.bghover)}
}
`
export const H3 = styled.h3`
color:${props => props.textcor};


 &:first-letter{
    text-transform: uppercase;
} 

 `


export const Button = styled.button`
color: ${props=> props.colorfont};
margin: 20px;
padding: 20px;
background-color: ${props=> props.bg};
border: ${props => (props.border)};
border-radius: 10px;
cursor: pointer;
font-family: 'Kanit', sans-serif;
font-weight: 400;

&:hover {
 font-size: 18px;
 transition: 0.4s;
 box-shadow: ${props => (props.shadow)};
}
`


export const DivBtThema = styled.div`
position: absolute;
left: 10px;
bottom: 30px;

@media(max-width: 721px){
position: static;
}

`

export const DivButtons = styled.div`
display: flex;


@media(max-width: 720px){
 align-items: center;
flex-direction: column;
}

`

export const P = styled.p`
color: crimson;
font-weight:800;
`
