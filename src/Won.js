import React from "react";
import Inazuma from './images/Emblem_Inazuma.png'


export default function Won(props){


    return(
        <div className="won">
            <img className="won-background" src={Inazuma}></img>
            <h2>You Won!</h2>
            <h1 className="card-clicks">{Math.floor(props.CardClicks)}</h1>
            <button onClick={props.PlayAgain}>Play Again</button>
           
        </div>


    )
}