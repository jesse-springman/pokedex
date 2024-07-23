import { useContext, useEffect, useState } from "react"
import { Logo, P } from "../pokeList/styleList"
import { ContDetails, Div, ImgPoke, DivInfo, NamePoke, Titulo, TypesPoke, DivType, ListMoves, Response, ListAbility } from './style_Card'
import { useDetails } from "../hooks_and_function/hooks_details"
import { useBtnFilter } from "../hooks_and_function/hooks_home"
import { BtnReturn } from "../pokeBtnReturn"
import { ThemeContext } from "../../contexts/theme"
import urlLogo from '../../assets/pokedex.jpg'
import { ToggleTheme } from "../themeBtn/toggle"

export const DetailsPokemons = (props) => {

    const { theme } = useContext(ThemeContext)

    const { dataDetails, moviments, abilitys } = useDetails(props)



    return (


        <ContDetails bg={theme.back} >


            <Logo src={urlLogo} />


            <Div bgcard={theme.bgDetails} border={theme.border} shadow={theme.shadow}>

                {dataDetails ? (


                    <>

                        <DivInfo>
                            <ImgPoke src={dataDetails.sprites.other.home.front_default} />


                            <NamePoke>{dataDetails.name}</NamePoke>


                            <Titulo color={theme.colorTitule} >TYPE :</Titulo>


                            <TypesPoke>{dataDetails.types[0].type.name}</TypesPoke>

                        </DivInfo>




                        <Titulo color={theme.colorTitule} >MOVEMENTS :</Titulo>

                        <ListMoves>

                            {

                                moviments.map((movePoke, index) => {
                                    return (
                                        <li key={index}>
                                            <Response>{movePoke.move.name}</Response>

                                        </li>
                                    )
                                })

                            }

                        </ListMoves>




                        <Titulo color={theme.colorTitule} >Ability :</Titulo>


                        {
                            <Response>{abilitys.effect_entries[1].short_effect}</Response>
                        }

                    </>


                ) : (

                    <p>Loading</p>
                )

                }

            </Div>


            <BtnReturn />

            <ToggleTheme />

        </ContDetails>

    )
}