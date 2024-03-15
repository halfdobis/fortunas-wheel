import React from "react";
import Link from "next/link";
import Video from "next-video";
import WebVideo from "../assets/images/Website-Video.mp4";

function Header() {
  return (
    <header className="app__header">
      <Video
        src={WebVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="app__header__video"
      ></Video>
      <div className="app__header-overlay">
        <div className="app__header-container">
          <div className="app__header-row">
            <div className="app__header-content">
              <div className="app__header-text">
                <h2> FORTUNA'S REALM </h2>
                <p>
                  {" "}
                  Welcome to Forutna's Realm, The goddess of Luck! <br /> Play
                  the Divine Draw, become a guardian, let Fortuna's fortune
                  shine on you!{" "}
                </p>
                <div className="app__header-btns">
                  <Link href="/divine-draw" className="app__header-btn_alt">
                    <span> Divine Draw </span>
                  </Link>
                  <Link href="/guardian" className="app__header-btn">
                    <span> Become A Guardian </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
