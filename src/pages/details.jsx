
import { useParams } from "react-router-dom"
import { DetailsPokemons } from '../components/pokeDetails/index'


export const Details = () => {

    let {id} = useParams()

    return(
        <DetailsPokemons dataUrl={id}/>
    )
}