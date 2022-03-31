import React from "react";
import './app.css';


export default function Card(props){
const disapper = {
   
   transform: 'translateY(110vh) skewX(30deg)',
   transition: 'all 1s ease-in-out'
}
   
   return (
   <div className="card-main">
  <div className={props.isActive ? "card-front-on": "card-front"}
   onClick= {props.handleClick}
   onDoubleClick = {props.handleDoubleClick}
   ></div>
  <div 
  className= {props.isActive ? "card-back-on": "card-back"}
  style= {props.isMatched ? disapper : null}
  >
     <img 
     src={props.img}
     className= "png"
     ></img>

  </div>
    </div>
   )
}