import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokemons } from "../component/pokemons"

import { Details } from "../component/details"

export const AppRouter =()=>{
    return(
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pokemons/>} />
            <Route path="/pokemon/:id" element={<Details/>} />
          </Routes>
         </BrowserRouter>
    )
}