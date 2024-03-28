import React, { useState, useEffect, useRef } from "react";
import {
  BiArrowToRight,
  BiRightArrowAlt,
  BiLeftArrowAlt,
} from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import History from "../components/History";
import Image from "next/image";
import Ticket1 from "../assets/images/Fortuna-ticket-0.jpg";
import Ticket2 from "../assets/images/Fortuna-ticket-1.jpg";

export default function DivineDraw() {
  const [toggle, setToggle] = useState("rounds");
  const [round, setRound] = useState(250);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showTicketView, setShowTicketView] = useState(false);

  const ref = useRef(null);

  const handleScroll = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handle_change = (e) => {
    setRound(e.target.value);
  };

  useEffect(() => {
    const countDownDate = new Date("Mar 31, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setShowTicketView(true);
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

  useEffect(() => {
    if (showTicketView) {
      // Calculate the ticket countdown date (7 days from now)
      const ticketCountDownDate = new Date();
      ticketCountDownDate.setDate(ticketCountDownDate.getDate() + 7);
      ticketCountDownDate.setHours(0, 0, 0, 0);
      const ticketEndTime = ticketCountDownDate.getTime();

      const ticketInterval = setInterval(() => {
        const now = new Date().getTime();
        const ticketDistance = ticketEndTime - now;

        if (ticketDistance <= 0) {
          clearInterval(ticketInterval);
          // Handle what happens after the ticket countdown ends
        } else {
          const ticketDays = Math.floor(ticketDistance / (1000 * 60 * 60 * 24));
          const ticketHours = Math.floor(
            (ticketDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const ticketMinutes = Math.floor(
            (ticketDistance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const ticketSeconds = Math.floor(
            (ticketDistance % (1000 * 60)) / 1000
          );

          // Update state variables for the ticket countdown
          setDays(ticketDays);
          setHours(ticketHours);
          setMinutes(ticketMinutes);
          setSeconds(ticketSeconds);
        }
      }, 1000);

      return () => clearInterval(ticketInterval);
    }
  }, [showTicketView]);

  const winning_addresses = [
    {
      id: 1,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 25,
      price: 2000,
    },
    {
      id: 2,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 56,
      price: 2000,
    },
    {
      id: 3,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 78,
      price: 2000,
    },
    {
      id: 4,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 14,
      price: 2000,
    },
    {
      id: 5,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 20,
      price: 2000,
    },
    {
      id: 6,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 5,
      price: 2000,
    },
    {
      id: 7,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 8,
      price: 2000,
    },
    {
      id: 8,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 12,
      price: 2000,
    },
    {
      id: 9,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 30,
      price: 2000,
    },
    {
      id: 10,
      wallet_address: "0xfdxffffffffffffffffffffffffffffffffffffffffffff",
      tickets: 18,
      price: 2000,
    },
  ];

  return (
    <div className="app__divine-draw">
      <div className="app__divine-draw__container">
        <div className="app__divine-draw__header">
          <div className="app__divine-draw_overlay" />
          {showTicketView ? (
            <div className="app__divine-draw-ticket-view">
              <Image src={Ticket1} alt="Fortuna Ticket" />
              <div className="app__divine-draw-countdown">
                <button>Buy Ticket</button>
                <p>Ticket Sales Countdown:</p>
                <div className="app__divine-draw-countdown-timer">
                  <span>{days < 10 ? `0${days}` : days}</span> :
                  <span>{hours < 10 ? `0${hours}` : hours}</span> :
                  <span>{minutes < 10 ? `0${minutes}` : minutes}</span> :
                  <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                </div>
              </div>
            </div>
          ) : (
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
            </div>
          )}

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
                    {/* <tbody>
                      <tr>
                        <td>
                          {winning_addresses.map((address) => (
                            <div className="" key={address.id}>
                              <h3>{address.wallet_address}</h3>
                            </div>
                          ))}
                        </td>
                        <td>
                          {" "}
                          {winning_addresses.map((address) => (
                            <div className="" key={address.id}>
                              <h3>{address.tickets}</h3>
                            </div>
                          ))}
                        </td>
                        <td>
                          {winning_addresses.map((address) => (
                            <div className="" key={address.id}>
                              <h3>{address.id}</h3>
                            </div>
                          ))}
                        </td>
                        <td>
                          {winning_addresses.map((address) => (
                            <div className="" key={address.id}>
                              <h3>{address.price}</h3>
                            </div>
                          ))}
                        </td>
                      </tr>
                    </tbody> */}
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
