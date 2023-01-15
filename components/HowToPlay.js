import React from 'react';
import { steps } from '../data/howtoplay';

const Card = ({ stage, title, text }) => (
    <div className="app__howtoplay-card__container">
        <div className="app__howtoplay-card__container-step"> { stage } </div>
        <h3> { title } </h3>
        <p> { text } </p>
    </div>
)

function HowToPlay() {
  return (
    <div className="app__howtoplay section__container">
        <div className="app__howtoplay-container">
            <div className="app__howtoplay-container__header">
                <h2> How to Play </h2>
                <p> Follow These steps to Become A Guardian Hodler </p>
            </div>
            <div className="app__howtoplay-container__content">
                { steps.map((step, index) => (
                    <Card 
                        stage={index+1}
                        key={step.id} 
                        title={step.title} 
                        text={step.text}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default HowToPlay;