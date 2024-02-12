import { useState, useEffect, useContext } from "react"
import { ThemeContext } from '../../context/theme.context'
import { useParams } from "react-router-dom"
import axios, { Axios } from "axios"
import { Ability } from "../ability"
import { Cont, Div, ImgPoke, Name, Valor, Titulo, Lista, DivType, DivInfo, P } from "../../style/details-style"
import { Logo } from "../../style/firtsPoke-style" 
import logo from '../../img/pokedex.jpg'
import { ButtonReturn } from "../button-return"
import { ToggleTheme } from "../../context/toggle-theme" 


export const Pokemon = () => {

    const [dataPoke, setPoke] = useState()

    const [move, setMove] = useState([])

    const { id } = useParams()

    const { theme } = useContext(ThemeContext)

    


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const data = await response.data
                const allMove = data.moves;
                const filterMoves = allMove.slice(1, 11)

                setPoke(data)
                setMove(filterMoves)
            }

            catch (error) {
                console.error(error)
            }
        }

        fetchData()

    }, [])



    return (

        <Cont bg={theme.background}>

            <Logo src={logo} />

            <Div border={theme.border} shadow={theme.shadowDetails} bgcard={theme.bgDetails} >

                {dataPoke ? (
                    <>

                        <ImgPoke src={dataPoke.sprites.other.dream_world.front_default} alt={dataPoke.name} />

                        <Name>{dataPoke.name}</Name>


                        <DivInfo infocor={theme.colorInfo} border={theme.border}  >

                            <Titulo cor={theme.colorTitule} >Movimentos : </Titulo>

                            <Lista>

                                {
                                    move.map((pokeMovi, index) => {
                                        return (
                                            <li key={index}>
                                                <Valor>{pokeMovi.move.name}</Valor>
                                            </li>
                                        )
                                    })

                                }

                            </Lista>


                            <DivType>

                                <Titulo cor={theme.colorTitule}>Type :</Titulo>

                                <Valor >{dataPoke.types[0].type.name}</Valor>

                            </DivType>

                           

                            <Ability />

                        </DivInfo>

                        
                    </>

                ) : (
                    <P>erro</P>
                )}


            </Div>

            <ToggleTheme/>       

            <ButtonReturn />

        </Cont>


    )
}  
