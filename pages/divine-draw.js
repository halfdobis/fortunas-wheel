import React, { useState, useEffect} from 'react';

import { BiArrowToRight, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

export default function DivineDraw() {
  const [ round, set_round ] = useState(250);
  const handle_change = (e) => {
    set_round(e.target.value)
  }

  const winning_balls = [
    { id: 1, number: 5 },
    { id: 2, number: 6 },
    { id: 3, number: 0 },
    { id: 4, number: 8 },
    { id: 5, number: 4 },
    { id: 6, number: 9 },
  ]

  const top_winners = [
    { id: 1, prize: '', match: '', }
  ]

  // Set the date we're counting down to
  const [ seconds, set_seconds ] = useState(0);
  const [ days, set_days ] = useState(0);
  const [ hours, set_hours ] = useState(0);
  const [ minutes, set_minutes ] = useState(0);
  var countDownDate = new Date("Dec 16, 2023 15:37:25").getTime();

  
  useEffect(()=> {
      // Update the count down every 1 second
      var x = setInterval(function() {
          // Get today's date and time
          var now = new Date().getTime();
          // Find the distance between now and the count down date
          var distance = countDownDate - now;              
          // Time calculations for days, hours, minutes and seconds
          set_days(Math.floor(distance / (1000 * 60 * 60 * 24)));
          set_hours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          set_minutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
          set_seconds(Math.floor((distance % (1000 * 60)) / (1000)));
            
      }, 1000);
  },[])

  return (
    <div className="app__divine-draw section__container">
      <div className='app__divine-draw__container'>
        {/* Header */}
        <div className="app__divine-draw__header">
          <div className="app__divine-draw__header-container">
          <h4> The Divine Draw </h4>
          <h2> Tickets on sale soon </h2>
          <div className="countdown">
            <div className="days time">
              <div>
                <h2> { days < 10 ? "0"+days : days } </h2>
              </div>
              <p> Days </p>
            </div>
            <div className="hours time">
              <div>
                <h2> { hours < 10 ? "0"+hours : hours } </h2>
              </div>
              <p> hours </p>
            </div>
            <div className="minutes time">
              <div>
                <h2> { minutes < 10 ? "0"+minutes : minutes } </h2>
              </div>
              <p> minutes </p>
            </div>
            <div className="seconds time">
              <div>
                <h2> { seconds < 10 ? "0"+seconds : seconds }</h2>
              </div>
              <p> seconds </p>
            </div>
          </div>
          <button disabled={true}> Buy ticket </button>
          </div>
        </div>

        {/* HISTORY */}
        <div className="app__divine-draw__history">
          <div className="app__divine-draw__history-container">
            <div className="app__divine-draw__history-ticket">
              <div className="ticket">
                <p> winning numbers </p>
                <div className="ticket__balls">
                  { winning_balls.map(ball => (
                    <div className="balls" key={ball.id}>
                      <h3>{ ball.number }</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="app__divine-draw__history-header">
              <div className="app__divine-draw__history-header__left">
                <div className="app__divine-draw__history-round"> 
                  <span> Round </span>
                  <input 
                    disabled={round >= 250 ? true : false}
                    min={1}
                    max={round}
                    onChange={handle_change}
                    type="number"
                  />
                </div>
                <p> Drawn Jan 30, 2023, 5:00 PM </p>
              </div>
              <div className="app__divine-draw__history-header__right">
                <BiLeftArrowAlt />
                <BiRightArrowAlt />
                <BiArrowToRight />
              </div>
            </div>
            <div className="app__divine-draw__history-body">
              <table>
                <thead>
                  <tr>
                    <th> Name </th>
                    <th className='ticket-box'> ticket </th>
                    <th> Match </th>
                    <th> Prize </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="app__divine-draw__history-Footer"> Footer </div>
          </div>
        </div>

        {/* STEPS TO EARN */}
        <div className="app__divine-draw__steps-container">
          <h2> Start Earning today! </h2>
          <div className="app__divine-draw__steps">
            <div className="app__divine-draw__step">
              <span> step 1</span>
              <h3> Buy Tickets </h3>
              <p> Prices are set when the round starts, buy your ticket for just $1.00 and choose your ticket numbers.</p>
            </div>
            <div className="app__divine-draw__step">
              <span> step 2</span>
              <h3> Wait for the Draw </h3>
              <p> There is one draw every day alternating between 0 AM UTC and 12 PM UTC.</p>
            </div>
            <div className="app__divine-draw__step">
              <span> step 3</span>
              <h3> Check for Prizes </h3>
              <p> Once the round’s over, come back to the page and check to see if you’ve won! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
