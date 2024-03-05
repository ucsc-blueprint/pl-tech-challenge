import "./FlipCard.css";

import { useState } from "react";

const FlipCard = (props) => {
    

    return (
        <div className={`flip-card ${props.isFront ? null : "flip"}`} onClick={props.handleCardClick}>
            <div className="card-inner">
                <div className={`card-front ${props.cat}`}>
                    <p className="ques card-text">{props.cardQues}</p>
                </div>
                <div className={`card-back ${props.cat}`}>
                    <img src={props.cardImg} alt="" className="card-img" />
                    <p className="ans card-text">{props.cardAns}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;