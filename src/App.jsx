import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { nextCard, prevCard, totalCards } from './js/cardGenerator';

import './App.css';

import FlipCard from './components/FlipCard';

function App() {
  const [card, setCard] = useState(null);
  const [cardGuess, setCardGuess] = useState("");
  const [guessed, setGuessed] = useState(false);
  const [currentStreak, setCStreak] = useState(0);
  const [longestStreak, setLStreak] = useState(0);
  
  // load a random card intially
  useEffect(() => {
    setCard(nextCard());
  }, []);

  
  const [isFront, setIsFront] = useState(true);
  const handleNext = () => {
    setIsFront(true);
    setGuessed(false);
    setCard(nextCard());
  };
  const handlePrev = () => {
    setIsFront(true);
    setGuessed(false);
    setCard(prevCard());
  };
  // when the card is clicked change what side we see
  const handleCardClick = () => {
      setIsFront(!isFront);
  }

  // check if the ans inputted is corrent
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardGuess, card.ans);
    if (cardGuess.toLowerCase() == card.ans.toLowerCase() && !guessed) {
      setCStreak(currentStreak + 1);
    } else if (cardGuess.toLowerCase() == card.ans.toLowerCase() && guessed) { 
      alert("You have already entered an answer for this card");
    } else {
      setCStreak(0);
    }
    
    setGuessed(true); // ans was correct
    setCardGuess("");
    setIsFront(false); // flip the card
  }

  // if the current streak is longer than the longest then update the streak
  useEffect(() => {
    if (currentStreak > longestStreak) setLStreak(currentStreak);
    console.log(guessed);
  }, [currentStreak]);

  return (
    <>
      <div className="header">
        <h1 className='title'>Are you smarter than an elementary schooler?</h1>
        <div className="stats">
          <h2 className='subtitle'>Total cards: {totalCards()}</h2>
          <div className="row even">
            <h2 className="subtitle">Current Streak: {currentStreak}</h2>
            <h2 className="subtitle">Longest Streak: {longestStreak}</h2>
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
              value={cardGuess}
              onChange={(e) => setCardGuess(e.target.value)} />
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
