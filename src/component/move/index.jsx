import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const MovePokemons = () => {
    const [move, setMove] = useState([])

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/move/${id}`)

                const dataMove = response.data.contest_combos

                setMove(dataMove.normal);
            }

            catch (error) {
                console.error(error)

            }

        }


        fetchData()

    }, [])

console.log(move.use_before)

    return (

        <div>
            <h3>Movimentos</h3>

              {move.use_before.length > 0 ? (
                <ul>
                {
                    move.use_before.map((move, index) => {
                        return (
                            <li key={index}>
                                <p>{move.name} </p>
                            </li>
                        )
                    })
                }
            </ul>

            ) : (
                <p>Sem movimentos</p>
            ) }  

            
        </div>

    )


}