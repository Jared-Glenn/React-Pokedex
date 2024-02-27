import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
    return <>
    <h1 className="pokedex-title">Pokedex</h1>
    <div className="pokedex-container">
    {props.pokemons.map(pokemon => (
        <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
        ))}
        </div>
        
    </>
};

Pokedex.defaultProps = {
    pokemons: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
}

export default Pokedex;