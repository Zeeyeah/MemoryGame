import React from 'react';
import './app.css';
import cardsArray from './cardsArray';
import arrayShuffle from 'array-shuffle';
import Card from './Card.js';
import Won from './Won.js';
import Nav from './Nav.js';
import Background from './images/background.jpg'



function App() {
  

  
  
  
  const [cards, setCards] = React.useState(arrayShuffle(cardsArray))
  const [choiceOne, setChoiceOne] = React.useState(null)
  const [choiceTwo, setChoiceTwo] = React.useState(null)
  const [cardClicks, setCardClicks] = React.useState(0)
  const youWon = cards.every(card=> card.isMatched)


  function resetCards(){
    setChoiceOne(null)
    setChoiceTwo(null)
    setCardClicks(0)
    setCards(arrayShuffle(cardsArray))
}


  function flipCards(card, id){
    setCardClicks(prevClicks=> (prevClicks + 1 / 2) )
    setCards(prevCards =>{
      return prevCards.map( card => {
        if (card.id === id){
          return {...card, isActive:true}
        } else{
          return card
        }
      })
    })
      if (choiceOne == null) {
        setChoiceOne(card)
      } else if(choiceOne.id === card.id) {
        setChoiceOne(card)
      } else{
        setChoiceTwo(card)
      }
       
  }

  React.useEffect(()=>{
    const timeOut = setTimeout(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src){
        
        setCards(prevCards =>{
          return prevCards.map( card => {
            if (card.id === choiceOne.id){
              return {...card, isMatched:true}
              
            } else if (card.id === choiceTwo.id) {
                
              return {...card, isMatched: true}
             }
            else{
              return card
            }
          })
        })
        setChoiceOne(null)
        setChoiceTwo(null)
      } else {
        setCards(prevCards =>{
          return prevCards.map( card => {
              if (card.id === choiceOne.id){

                return {...card, isActive:false}
                
                
              } else if (card.id === choiceTwo.id) {
                
                return {...card, isActive:false}
               
               
             } else {
               return card
             }
             
            })
          })
          setChoiceOne(null)
          setChoiceTwo(null)
        }
      }
    }, 300);
    return ()=> clearTimeout(timeOut)
   }, [choiceOne, choiceTwo])

  function showAlert(){}
  function handleDoubleClick(){}


const cardElement = cards.map(card=>{

       return(
         <Card
          img={card.src}
          isActive = {card.isActive}
          handleDoubleClick= {handleDoubleClick}
          isMatched = {card.isMatched}
          handleClick = {()=> choiceOne && choiceTwo ? showAlert(): flipCards(card, card.id)}
          />
       )
})



  return (

    <div className="App">
      

      { youWon ? null : <Nav
       CardClicks = {cardClicks}
       Reset = {resetCards}
       />}


    <div className='card-wrapper'>
         {youWon ? <Won 
         CardClicks = {cardClicks}
         PlayAgain = {resetCards}
         /> :  cardElement}
    </div>


    </div>
  );
}

export default App;
