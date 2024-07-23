import React from "react";
import { render } from "@testing-library/react";
import { BtnMore } from "../src/components/pokeList/styleList";
import { ThemeProvider } from "../src/contexts/theme"
import { ListPokemons } from "../src/components/pokeList/index.";


describe('home', () => {



    it('render btn more', () => {
        render(

            <ThemeProvider  >
                <ListPokemons />
            </ThemeProvider>)

        const button = screen.getByText('More Pokemons')
        expect(button).toBeInTheDocument();


    })
})