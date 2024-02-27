import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
    return <div className="pokecard-card">
        <h3 className="pokecard-name">{props.name}</h3>
        <img className="pokecard-image" src={props.image}/>
        <p>Type: {props.type}</p>
        <p>EXP: {props.base_experience}</p>

    </div>
};

export default Pokecard;