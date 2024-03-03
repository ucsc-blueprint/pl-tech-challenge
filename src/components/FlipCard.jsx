import "./FlipCard.css";

import { useState } from "react";

const FlipCard = (props) => {
    const [isFront, setIsFront] = useState(true);
    // when the card is clicked change what side we see
    const handleCardClick = () => {
        setIsFront(!isFront);
    }

    return (
        <div className={`flip-card ${isFront ? null : "flip"}`} onClick={handleCardClick}>
            <div className={`card-front ${props.difficulty}`}>
                <p className="ques card-text">{props.cardQues}</p>
            </div>
            <div className={`card-back ${props.difficulty}`}>
                <img src={props.cardImg} alt="" className="card-img" />
                <p className="ans card-text">{props.cardAns}</p>
            </div>
        </div>
    );
}

export default FlipCard;