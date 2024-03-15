import React from "react";

export default function Rules() {
  return (
    <div className="app__rules">
      <div className="app__rules-container">
        <div className="app__rules-header">
          <h2> Rules of Fortuna's Divine Draw </h2>
        </div>
        <div className="app__rules-content section__container">
          <div className="app__rules-field">
            <p>
              {" "}
              <div className="dot" /> To participate in the event, players must
              purchase a lottery ticket for $20 during the sales period. The
              more tickets you buy, the higher chances of winning.
            </p>
          </div>
          <div className="app__rules-field">
            <p>
              {" "}
              <div className="dot" /> The sales period for tickets will run for
              one week, giving players ample time to purchase tickets and join
              the drawing. At the end of the sales period, a smart contract will
              randomly select 10 winners from all the ticket holders using a
              secure and transparent process.{" "}
            </p>
          </div>
          <div className="app__rules-field">
            <p>
              {" "}
              <div className="dot" /> The winners will be announced and the
              smart contract will distribute 50% of the funds raised from ticket
              sales to them equally. The lottery also has 50 NFT holders, known
              as guardians, who are entitled to 20% of the funds from the ticket
              sales at the end of the drawing.{" "}
            </p>
          </div>
          <div className="app__rules-field">
            <p>
              <div className="dot" /> The remaining funds raised from ticket
              sales will be distributed as follows: 20% to marketing &
              development, 5% to the team, and the remaining 5% to be held in
              reserve.{" "}
            </p>
          </div>
          <div className="app__rules-field">
            <p>
              <div className="dot" /> The use of a smart contract for the winner
              selection ensures transparency and fairness for all participants.
              The guardian NFTs can be purchased on the Solana chain, with a
              loyalty bonus of 10% for traders.{" "}
            </p>
          </div>
          <div className="app__rules-field">
            <p>
              <div className="dot" /> Players must agree to the terms and
              conditions of the event before participating. The event is open to
              players aged 18 and above. Players under the age of 18 are not
              eligible to participate. The event is void where prohibited by
              law.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
