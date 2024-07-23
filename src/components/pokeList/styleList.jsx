import styled from "styled-components";

export const ContList = styled.section`
background: ${props => props.bg};
 height: ${props => props.heightcont === true ? '' : '100vh'};  

width: 100vw;
display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center; 
 position: relative;
 padding: 20px;

 @media(max-width: 900px){
   height: ${props => props.heightcont === true ? '' : '100%'};
    }
`
export const Logo = styled.img`
height: 80px;
margin: 20px;

@media(max-width:700px){
  height: 60px;
}
`

export const InputSearch = styled.input`
background-color: aliceblue;
color: #000;
width: 250px;
height: 25px;
padding: 10px;
margin: 40px 0;
border: 2px solid blue;
border-radius: 5px;
`

export const Ul = styled.ul`
margin: 30px;
list-style: none;
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 25px;

@media(max-width: 900px){
      grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width:687px){
      grid-template-columns: repeat(2, 1fr);
    }    
`




export const UlFilter = styled.ul`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 align-items: center;
 margin: 20px;
 gap: 30px;
 margin-bottom: 70px;

`





export const ContFilter = styled.div`
 height: 100vh;
 padding: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Card = styled.li`
  
  padding: 12px;
  width: 150px;
  text-align: center;
  border: ${props => (props.bord)} ;
  background-color:${props => (props.bg)};
  border-radius: 10px;
  cursor: pointer;
  
&:hover{
   font-size: 18px;
   transition: .4s;
   box-shadow: ${props => (props.shadow)};
   background-color:${props => (props.bghover)}
}
`
export const ImgPoke = styled.img`
 width: 100px;
 object-fit: cover;
`

export const SecBtn = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
`

export const BtnMore = styled.button`
background: ${props => props.bg};
color: ${props => props.color};
border: ${props => props.bord};
display: ${props => props.hide ? 'none' : 'block'}; 
padding: 20px;
width: 180px;

&:hover{
  box-shadow: ${props => props.shadow};
}

`

export const BtnLess = styled.button`
background: ${props => props.bg};
color: ${props => props.color};
border: ${props => props.bord};
padding: 20px;
margin: 30px;
width: 160px;

&:hover{
  box-shadow: ${props => props.shadow};
}

`

export const BtnReturnFiler = styled.button`
 background: ${props => props.bgbtn}; 
 width: 130px;
border-radius: 15px;
border: ${props => props.border};
transition: 3ms;
padding: 20px;


&:hover {
 font-size: 18px;
 transition: 0.4s;
 box-shadow: ${props => (props.shadowcor)};
}
`


export const Btn = styled.button`
background: ${props => props.bg};
border-radius: 15px;
border: ${props => props.border};
transition: 3ms;
padding: 20px;


&:hover {
 font-size: 18px;
 transition: 0.4s;
 box-shadow: ${props => (props.shadowcor)};

}
`

export const P = styled.p`
color: crimson;
font-weight:800;
margin: 30px;
`
