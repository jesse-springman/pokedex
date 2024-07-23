import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Details } from '../pages/details'


export const AppRouter = () =>{
    return(
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/pokemon/:id' element={<Details/>} ></Route>
           </Routes>
        </BrowserRouter>
    )
}

