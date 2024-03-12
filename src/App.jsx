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
    currentStreak: 0,
    longestStreak: 0,
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
    console.log(cardGuess.ans);
    if (cardGuess.ans.toLowerCase() == card.ans.toLowerCase()) {
      console.log("correct");
      // notify that their guess was right
      setCardGuess({...cardGuess, currentStreak: cardGuess.currentStreak + 1});
      // have a new longest streak
      if (cardGuess.longestStreak < cardGuess.currentStreak) { 
        setCardGuess({...cardGuess, longestStreak: cardGuess.currentStreak});
      }
    } else {
      // have a new longest streak
      if (cardGuess.longestStreak < cardGuess.currentStreak) { 
        setCardGuess({...cardGuess, longestStreak: cardGuess.currentStreak});
      }
      setCardGuess({...cardGuess, currentStreak: 0});
    }

    setCardGuess({...cardGuess, ans: ""});
  }

  return (
    <>
      <div className="header">
        <h1 className='title'>Are you smarter than an elementary schooler?</h1>
        <div className="stats">
          <h2 className='subtitle'>Total cards: {totalCards()}</h2>
          <div className="row even">
            <h2 className="subtitle">Current Streak: {cardGuess.currentStreak}</h2>
            <h2 className="subtitle">Longest Streak: {cardGuess.longestStreak}</h2>
          </div>
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
