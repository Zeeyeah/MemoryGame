import React from "react";


export default function Nav(props){

    return(
        <header className="nav-bar">
            <h3>Flips: {Math.floor(props.CardClicks)}</h3>
            <button onClick={props.Reset}> Reset Game </button>
        </header>
    )
}