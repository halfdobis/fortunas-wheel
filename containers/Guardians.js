import React from 'react';
import Guardian from '../components/Guardian';

// guardians
import { guardians } from '../data/guardian';

function Guardians() {
  return (
    <div className="app__guardians">
        <div className="app__guardians-container">
            <div className="app__guardians-container__textbox">
                <h2> Become A Guardian </h2>
                <p> Get ready for the most exciting NFT drop this year! The lottery has 200 NFT holders, known as guardians, who are entitled to 20% of the funds from the ticket sales at the end of the drawing. The guardians are represented as unique NFTs that can be purchased on the Solana chain and traded with ETH, with a loyalty bonus of 10% for traders. </p>
            </div>
            <div className="app__guardians-container__image">
                { guardians.map((guardian, index) => (
                    <Guardian key={index} guardian={guardian} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Guardians