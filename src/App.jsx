import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nextCard, prevCard, totalCards } from './js/cardGenerator';

import './App.css';

import FlipCard from './components/FlipCard';

function App() {
  const [card, setCard] = useState(null);
  const [cardGuess, setCardGuess] = useState(
  {
    ans: "", 
    correct: 0,
    cardsRotated: 1,
  });
  
  // load a random card intially
  useEffect(() => {
    setCard(nextCard());
  }, []);

  
  const [isFront, setIsFront] = useState(true);
  const handleNext = () => {
    setIsFront(true);
    setCard(nextCard())
    setCardGuess({...cardGuess, correct: cardGuess.correct + 1});
    setCardGuess({...cardGuess, cardsRotated: cardGuess.cardsRotated + 1});
  };
  const handlePrev = () => {
    setIsFront(true);
    setCard(prevCard())
  };
  // when the card is clicked change what side we see
  const handleCardClick = () => {
      setIsFront(!isFront);
  }

  // check if the ans inputted is corrent
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Guess: ${cardGuess.ans.toLowerCase()}\tAns: ${card.ans.toLowerCase()}`);
    console.log(cardGuess.ans.toLowerCase() == card.ans.toLowerCase());
    setCardGuess({...cardGuess, correct: cardGuess.correct + 1});
    if (cardGuess.ans.toLowerCase() == card.ans.toLowerCase()) {
      console.log(`Num correct before: ${cardGuess.numCorrect}`);
      // notify that their guess was right
      setCardGuess({...cardGuess, correct: cardGuess.correct + 1});
      console.log(`Num correct after: ${cardGuess.numCorrect}\tshould be: ${cardGuess.numCorrect + 1}`);
    }

    setCardGuess({...cardGuess, ans: ""});
  }

  return (
    <>
      <div className="header">
        <h1 className='title'>Are you smarter than an elementary schooler?</h1>
        <div className="stats">
          <h2 className='subtitle'>Total cards: {totalCards()}</h2>
          <h2 className="subtitle">Num Correct: {cardGuess.correct}/{cardGuess.cardsRotated}</h2>
        </div>
      </div>

      <div className="main-body row" >
        <button className="prev control-btn" onClick={handlePrev}>
          <FaChevronLeft className='icon' />
        </button>

        <div className="card-container">
          {card ? 
            <FlipCard
              cardQues = {card.ques}
              cardAns = {card.ans}
              cardImg = {card.img}
              cat = {card.category}
              handleCardClick = {handleCardClick}
            isFront = {isFront} />: null}

          <form className="card-guess" onSubmit={(e) => handleSubmit(e)}>
            <input 
              type="text"
              id = "guess-input"
              className = "guess"
              value={cardGuess.ans}
              onChange={(e) => setCardGuess({...cardGuess, ans: e.target.value})} />
            <input 
              type="submit" 
              value="Check Ans"
              className = "guess"
              id='guess-submit' />
          </form>
        </div>


        <button className="next control-btn" onClick={handleNext}>
          <FaChevronRight className='icon' />
        </button>
      </div>
    </>
  )
}

export default App;
