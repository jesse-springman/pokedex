import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Details } from '../pages/details'


export const AppRouter = () =>{
    return(
        <BrowserRouter>
           <Routes>
            <Route path='/pokedex' element={<Home/>}></Route>
            <Route path='/pokedex/pokemon/:id' element={<Details/>} ></Route>
           </Routes>
        </BrowserRouter>
    )
}

