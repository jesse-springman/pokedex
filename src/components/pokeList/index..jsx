
import { useContext} from "react"
import { ThemeContext } from "../../contexts/theme"
import { Link } from "react-router-dom"
import { ContList, Logo, InputSearch, Ul, ContFilter, Card, SecBtn, BtnMore, BtnLess, P, UlFilter, ImgPoke, BtnReturnFiler } from "./styleList"
import { ToggleTheme } from "../themeBtn/toggle"
import urlLogo from '../../assets/pokedex.jpg'
import { useBtnFilter } from "../hooks_and_function/hooks_home"


export const ListPokemons = () => {

    const { pokemons, seachValue, noBtnMore, contHeight, maxPoke, pokeFilter, handleBtnMorePoke, handleBtnLess, handleInput, handleBtnReturn } = useBtnFilter(true, 10, false, 0)

    const { theme } = useContext(ThemeContext)

    const dataFilter = seachValue.length > 0 ? pokemons.filter(poke => poke.types[0].type.name.includes(seachValue)) : [];

    const pokeFiltrado = pokeFilter.length > 0 ? true : false;



    return (

        <ContList bg={theme.back} heightcont={contHeight} >

            <Logo src={urlLogo} alt="logo pokemon" ></Logo>


            <InputSearch
                type="text"
                value={seachValue}
                onChange={handleInput}
                placeholder="Enter pokemon type"
            />



            {
                seachValue.length > 0 ? (

                    <ContFilter>

                        {
                            seachValue.length > 0 && dataFilter.length === 0 ? (
                                <P>Type not found </P>

                            ) : (

                                <UlFilter>
                                    {

                                        dataFilter.map((pokeFilterr, index) => {

                                            return (

                                                <Card key={index} bg={theme.bgCard} bord={theme.border} shadow={theme.shadow} color={theme.color}>
                                                    <Link to={`pokemon/${pokeFilterr.id}`} >
                                                        <ImgPoke src={pokeFilterr.sprites.front_default} alt={pokeFilter.name} />
                                                        <h3>{pokeFilterr.name}</h3>
                                                    </Link>
                                                </Card>
                                            )
                                        })
                                    }
                                </UlFilter>

                            )
                        }

                        <BtnReturnFiler shadowcor={theme.shadow} bgbtn={theme.bgDetails} border={theme.border} cor={theme.border} onClick={handleBtnReturn}>Return</BtnReturnFiler>

                    </ContFilter>



                ) : (

                    <Ul>

                        {

                            pokemons ? (

                                pokemons.map((poke, index) => {

                                    return (

                                        <Card key={index} bg={theme.bgCard} bord={theme.border} shadow={theme.shadow} color={theme.color}>
                                            <Link to={`pokemon/${poke.id}`} >
                                                <ImgPoke src={poke.sprites.front_default} alt={poke.name} />

                                                <h3>{poke.name}</h3>
                                            </Link>
                                        </Card>
                                    )
                                })

                            ) : ('')
                        }

                    </Ul>

                )
            }



            {
                maxPoke >= 2 ? (
                    <P>Maximum number of pokemons 20 </P>
                ) :
                    (
                        ''
                    )
            }



            <SecBtn>
                {
                    noBtnMore ? (
                        <BtnMore hide={pokeFiltrado} bg={theme.bgCard} shadow={theme.shadow} bord={theme.border} cor={theme.color} onClick={handleBtnMorePoke} >More Pokemons</BtnMore>
                    ) : (
                        ''
                    )
                }





                {
                    pokemons && pokemons.length > 10 ? (
                        <BtnLess bg={theme.bgCard} shadow={theme.shadow} bord={theme.border} cor={theme.color} onClick={handleBtnLess} >Less Pokemons</BtnLess>

                    ) : (
                        ''
                    )
                }

                <ToggleTheme />

            </SecBtn>

        </ContList >
    )

}



