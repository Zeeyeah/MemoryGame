import './app.css';
import Card from './Card.js';
import React from 'react';
function App() {


const cardsArray = ["","","","","","","","","","","",
                       "","","","","","","","",""]

const [cards, setCards] = React.useState(cardsArray)

const cardElement = cards.map(card=>{
       return(
         <Card />
       )
})



  return (
    <div className="App">
    <div className='card-wrapper'>
         {cardElement}
    </div>
    </div>
  );
}

export default App;
