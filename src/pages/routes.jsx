import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokemons }  from "./home" 
import { Details } from "./details" 


export const AppRouter =()=>{
    return(
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pokemons/>} />
            <Route path="/pokemon/:id" element={<Details />} />
          </Routes>
         </BrowserRouter>
    )
}