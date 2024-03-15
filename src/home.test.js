
import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'; 
import axios from 'axios'
import  FirtsPokemons  from './component/firtsPokemons/index'; 
import { describe, it, expect } from 'vitest'
import App from './App'

jest.mock('axios')

describe('FirtPokemons Compenent',()=>{
  
  it('testte', ()=>{h
     render(<App/>)
     const message = screen.getByText('hello')
    expect(message).toBeVisible()


  })
   
})

