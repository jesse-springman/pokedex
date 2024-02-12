import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Titulo, Valor, P } from '../../style/details-style'
import { ThemeContext } from "../../context/theme.context" 


export const Ability = () =>{
  
    const [ ability, setAbility] = useState({
        abili:'',
        description:''
    })

    const { theme } = useContext(ThemeContext)

    const {id} = useParams()

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);
                const data = response.data;

                setAbility({
                    abili: data.name,
                    description: data.effect_entries[1].effect
                })
            }
  

            catch(error){
                console.error(error)
            }


            
        }

        fetchData()
    },[])

    return(
        <>

            {ability ? (

            <>
                <Titulo cor={theme.colorTitule} >Ability :</Titulo>

                
                <Valor>
                    {ability.description}
                </Valor>
            </>

            ):(

                <P>No ability</P>
            )}
            
        </>

    )

}