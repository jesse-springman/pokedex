import { useState, useEffect } from "react"
import { getPokemons } from "../../services/requestsAPI"



export const useBtnFilter = (setBtnMore, limitPoke, heightCont, numberPoke) => {

    const [pokemons, setPokemons] = useState()
    const [seachValue, setseachValue] = useState('')
    const [pokeFilter, setpokeFilter] = useState([])
    const [noBtnMore, setNoBtnMore] = useState(setBtnMore)
    const [limit, setLimit] = useState(limitPoke)
    const [contHeight, setHeight] = useState(heightCont)
    const [maxPoke, setMaxPoke] = useState(numberPoke)

   



    function handleBtnMorePoke() {
        setLimit(20)
        setHeight(true)
        setMaxPoke(maxPoke + 1)

    }

    function handleBtnLess() {
        setLimit(10)
        setHeight(false)
        setMaxPoke(0)
    }


    


    function handleBtnReturn() {
        setseachValue('')
    
        setNoBtnMore(true)
    }


       

    const handleInput = (e) => {

        setseachValue(e.target.value.toLowerCase())
        // setpokeFilter(dataFilter)

        // console.log(seachValue.length);
        
    


        
        

    }

    
    
    useEffect(()=>{
        if(seachValue.length> 0){
            setNoBtnMore(false)
        }
       
        else { setNoBtnMore(true) }
        
    })

    


    useEffect(() => {
        async function fetchData() {
            const pokeData = await getPokemons(limit)


            setPokemons(pokeData)


        }


        fetchData()

     

    }, [limit])


    
    return { pokemons , pokeFilter, seachValue, noBtnMore, contHeight, maxPoke, handleBtnMorePoke, handleBtnLess, handleInput, handleBtnReturn }

}


