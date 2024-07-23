
export  async function getPokemons(limit){
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
   const apiMain = await response.json()
  
   
   const dataPoke = apiMain.results.map(async(pokemons)=>{
      const responsedataPoke = await fetch(pokemons.url)
      const dataAllPoke = await responsedataPoke.json();

      return dataAllPoke
   })

  return  await Promise.all(dataPoke)

}


export async function getDetailsPoke(props){
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props}`)
   return await response.json()
}


export async function getHability(props){
   const response = await fetch(`https://pokeapi.co/api/v2/ability/${props}`)
   return await response.json()
}