import React from 'react';
import { steps } from '../data/howtoplay';

const Card = ({ stage, title, text }) => (
    <div className="app__lp-howtoplay_card">
        <div className="app__lp-howtoplay_card-step"> Step { stage } </div>
        <h3> { title } </h3>
        <p> { text } </p>
    </div>
)

function HowToPlay() {
  return (
    <div className="app__lp-howtoplay section__container">
        <div className="app__lp-howtoplay_container">
            <div className="app__lp-howtoplay_header">
                <h2> How to participate in the Fortuna NFT Draw </h2>
            </div>
            <div className="app__lp-howtoplay_content">
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