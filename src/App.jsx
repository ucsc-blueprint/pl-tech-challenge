import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nextCard, prevCard, totalCards } from './js/cardGenerator';

import './App.css';

import FlipCard from './components/FlipCard';

function App() {
  const [card, setCard] = useState(null);
  
  // load a random card intially
  useEffect(() => {
    setCard(nextCard());
  }, []);

  const handleNext = () => {
    setIsFront(true);
    setCard(nextCard())
  };
  const handlePrev = () => {
    setIsFront(true);
    setCard(prevCard())
  };

  const [isFront, setIsFront] = useState(true);
  // when the card is clicked change what side we see
  const handleCardClick = () => {
      setIsFront(!isFront);
  }

  return (
    <>
      <div className="header">
        <h1 className='title'>Are you smarter than an elementary schooler?</h1>
        <h2 className='subtitle'>Total cards: {totalCards()}</h2>
      </div>

      <div className="card-container row" >
        <button className="prev control-btn" onClick={handlePrev}>
          <FaChevronLeft className='icon' />
        </button>

        {card ? 
          <FlipCard
            cardQues = {card.ques}
            cardAns = {card.ans}
            cardImg = {card.img}
            cat = {card.category}
            handleCardClick = {handleCardClick}
          isFront = {isFront} />: null}


        <button className="next control-btn" onClick={handleNext}>
          <FaChevronRight className='icon' />
        </button>
      </div>
    </>
  )
}

export default App;
