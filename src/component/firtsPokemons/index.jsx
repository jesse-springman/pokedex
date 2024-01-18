import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../pokemons/img/pokedex.jpg'
import { Link } from "react-router-dom";
import { MorePokemons } from "../allPokemon";
import '../firtsPokemons/index.css'


export const FirtsPokemons = () => {

    const [pokemons, setPokemons] = useState([])
    const [render, setRender] = useState(false);



    useEffect(() => {
        async function fetchData() {
          
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
    
                const data = response.data
    
    
                const nameList = data.results.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url)
    
                    return await response.data
                })
    
                const dataPokemon = await Promise.all(nameList)
    
                setPokemons(dataPokemon);
            }

            catch (error) {
                console.error(error)
    
            }

        }


        fetchData()

    }, [])

    const addPoke = () => {
        setRender(true)
      }
    

    return (
        <section className="cont">

            <img className="logo" src={logo} alt="pokedex" />

            <ul className="lista">

                {
                    pokemons.map((poke, index) => {

                        return (

                            <li className="card" key={index}>
                                <Link to={`pokemon/${poke.id}`} >
                                    <img src={poke.sprites.front_default} alt={poke.name} />
                                    <h3 className="name">{poke.name}</h3>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>


                
            {render ? <MorePokemons /> : null}


            <ButtonPoke onClick={() => addPoke()}>Mais Pokemons</ButtonPoke> 

           
        </section>
    )
    
}

const ButtonPoke = styled.button
  `
margin: 20px;
padding: 15px;
background:#2f5071;
border:2px solid;
border-radius: 10px;
cursor: pointer;


&:hover {
 font-size: 17px;
 box-shadow:  2px 2px 15px 1px #09d4ef;
 background-color: rgb(17, 17, 200);
 transition: .3s;
}
`;