import { useState, useEffect } from "react"  
import { getDetailsPoke } from "../../services/requestsAPI"
import { getHability } from "../../services/requestsAPI"




export const useDetails = (props) =>{

    
const [dataDetails, setDataDetails] = useState()

const [moviments, setMoves] = useState()

const [abilitys, setabilitys] = useState()


useEffect(() => {
    async function fetchData() {
        const dataRequest = await getDetailsPoke(props.dataUrl)
        const dataHability = await getHability(props.dataUrl)
        const allMoves = dataRequest.moves.slice(1, 11)


        setDataDetails(dataRequest)

        setMoves(allMoves)

        setabilitys(dataHability)

    }


    fetchData()
}, [])


    return { dataDetails, moviments, abilitys }

}