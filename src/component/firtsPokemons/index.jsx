
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import logo from '../../img/pokedex.jpg'
import { Link } from "react-router-dom";
import { SectionContainer, Logo, Ul, Iten, H3, Button, DivButtons, P } from "../../style/firtsPoke-style";
import { ThemeContext } from "../../context/theme.context";
import { ToggleTheme } from "../../context/toggle-theme";


export const FirtsPokemons = () => {

    const [pokemons, setPokemons] = useState([])

    const [buttonLess, setButtonLess] = useState(false)

    const [maxPokemon, setMaxPokemon] = useState(false)

    const { theme } = useContext(ThemeContext)


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


    async function addPoke() {
        try {

            if (pokemons.length < 20) {
                setButtonLess(true)

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20`)

                const data = response.data


                const nameList = data.results.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url)

                    return await response.data
                })

                const dataPokemon = await Promise.all(nameList)

                setPokemons([...pokemons, ...dataPokemon]);
            }

            else {
                setMaxPokemon(true)

            }



        }

        catch (error) {
            console.error(error)

        }
    }


    function lessPoke() {

        const less = pokemons.slice(0, 10)

        setPokemons(less)

        setMaxPokemon(false)

        setButtonLess(false)
    }



    return (
        <SectionContainer bgall={theme.background} >

            <Logo src={logo} alt="pokedex" />

            <Ul >

                {
                    pokemons.map((poke, index) => {

                        return (
                            <>

                                <Iten bord={theme.border} shadow={theme.shadow} bghover={theme.bgHoverCard} key={index}>
                                    <Link to={`pokemon/${poke.id}`} >
                                        <img src={poke.sprites.front_default} alt={poke.name} />
                                        <H3 style={{ color: theme.color }}>{poke.name}</H3>
                                    </Link>
                                </Iten>
                            </>
                        )
                    })
                }
            </Ul>

            {maxPokemon ? (
                <P>Number maximum is 20 Pokemons </P>

            ) : ''}


            <DivButtons>

               




                <Button bg={theme.bgIten} border={theme.border} shadow={theme.shadow} colorfont={theme.color} onClick={() => addPoke()} >More Pokemons</Button>

                {buttonLess ? (

                    <Button bg={theme.bgIten} border={theme.border} shadow={theme.shadow} colorfont={theme.color} onClick={() => lessPoke()} >Less Pokemons</Button>


                ) : ''}


                <ToggleTheme />    

            </DivButtons>

        </SectionContainer>
    )

}











