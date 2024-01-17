import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export const MorePokemons = () => {

    const [lastPokemons, setLast] = useState([])


    useEffect(() => {

        async function fetchData() {

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20`)

                const data = response.data


                const nameList = data.results.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url)

                    return await response.data
                })

                const dataPokemon = await Promise.all(nameList)

                setLast(dataPokemon);
            }

            catch (error) {
                console.error(error)

            }
        }

        fetchData()

    }, [])


    return (
        <section className="cont">
            <ul className="lista">
                {
                    lastPokemons.map((poke, index) => {
                        return (
                            <li className="card" key={index}>
                                <Link to={`pokemon/${poke.id}`}>
                                    <img src={poke.sprites.front_default} alt={poke.name} />
                                    <h3 className="name">{poke.name}</h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}