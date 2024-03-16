import React, { useState, useEffect, useRef } from "react";
import {
  BiArrowToRight,
  BiRightArrowAlt,
  BiLeftArrowAlt,
} from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import History from "../components/History";

export default function DivineDraw() {
  const [toggle, setToggle] = useState("rounds");
  const ref = useRef(null);
  const [round, setRound] = useState(250);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleScroll = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handle_change = (e) => {
    set_round(e.target.value);
  };

  const winning_balls = [
    { id: 1, number: 5 },
    { id: 2, number: 6 },
    { id: 3, number: 0 },
    { id: 4, number: 8 },
    { id: 5, number: 4 },
    { id: 6, number: 9 },
  ];

  const top_winners = [{ id: 1, prize: "", match: "" }];

  useEffect(() => {
    const countDownDate = new Date("Mar 30, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app__divine-draw">
      <div className="app__divine-draw__container">
        <div className="app__divine-draw__header">
          <div className="app__divine-draw_overlay" />
          <div className="app__divine-draw__header-container">
            <h4> The Divine Draw </h4>
            <h2> Tickets on sale soon </h2>
            <div className="countdown">
              <div className="days time">
                <div>
                  <h2> {days < 10 ? `0${days}` : days} </h2>
                </div>
                <p> Days </p>
              </div>
              <div className="hours time">
                <div>
                  <h2> {hours < 10 ? `0${hours}` : hours} </h2>
                </div>
                <p> hours </p>
              </div>
              <div className="minutes time">
                <div>
                  <h2> {minutes < 10 ? `0${minutes}` : minutes} </h2>
                </div>
                <p> minutes </p>
              </div>
              <div className="seconds time">
                <div>
                  <h2> {seconds < 10 ? `0${seconds}` : seconds}</h2>
                </div>
                <p> seconds </p>
              </div>
            </div>
            <button disabled={true}> Buy ticket </button>
          </div>

          <div className="app__divine-draw__scroll">
            <BsArrowDown size={32} color="#fff" onClick={handleScroll} />
          </div>
        </div>

        <div className="app__divine-draw__history" ref={ref}>
          <div className="app__divine-draw__history-toggle">
            <div className="toggle__btns">
              <button
                className={`toggle__btn ${toggle === "rounds" ? "active" : ""}`}
                onClick={() => setToggle("rounds")}
              >
                <span> Finished Rounds </span>
              </button>
              <button
                className={`toggle__btn ${
                  toggle === "history" ? "active" : ""
                }`}
                onClick={() => setToggle("history")}
              >
                <span> History </span>
              </button>
            </div>
          </div>

          {toggle === "rounds" ? (
            <div className="app__divine-draw__history-content">
              <div className="app__divine-draw__history-container">
                <div className="app__divine-draw__history-ticket">
                  <div className="ticket">
                    <p> winning numbers </p>
                    <div className="ticket__balls">
                      {winning_balls.map((ball) => (
                        <div className="balls" key={ball.id}>
                          <h3>{ball.number}</h3>
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
                    <p> Drawn Feb 30, 2024, 5:00 PM </p>
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
                        <th> Wallet ID </th>
                        <th className="ticket-box"> Tickets </th>
                        <th> Winner No. </th>
                        <th> Prize </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="app__divine-draw__history-Footer"> </div>
              </div>{" "}
            </div>
          ) : toggle === "history" ? (
            <History />
          ) : (
            <div className="app__divine-draw__history-empty">
              <div>
                <h3> No Draws Yet </h3>

                <p> Connect Wallet to buy tickets or check your history. </p>
                <button> Connect Wallet </button>
                <p> </p>
              </div>{" "}
            </div>
          )}
        </div>

        <div className="app__divine-draw__steps-container section__container">
          <h2> Start Earning today! </h2>
          <div className="app__divine-draw__steps">
            <div className="app__divine-draw__step">
              <span> step 1</span>
              <h3> Buy Tickets </h3>
              <p>
                {" "}
                Prices are set when the round starts, buy your ticket for just
                $1.00 and choose your ticket numbers.
              </p>
            </div>
            <div className="app__divine-draw__step">
              <span> step 2</span>
              <h3> Wait for the Draw </h3>
              <p>
                {" "}
                There is one draw every day alternating between 0 AM UTC and 12
                PM UTC.
              </p>
            </div>
            <div className="app__divine-draw__step">
              <span> step 3</span>
              <h3> Check for Prizes </h3>
              <p>
                {" "}
                Once the round’s over, come back to the page and check to see if
                you’ve won!{" "}
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
