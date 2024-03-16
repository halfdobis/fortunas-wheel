import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="app__lp-about section__container">
      <div className="app__lp-about_container">
        <div className="app__lp-about_header">
          <h2> About Fortuna </h2>
        </div>

        <div className="app__lp-about_content">
          <div className="app__lp-about_row">
            <p>
              {" "}
              As you step into the world of Divinedraw, you can feel the
              mystical energy of Fortuna, the goddess of luck, all around you.
              You see the wheel of luck spinning in the distance, beckoning you
              to take a chance and spin it yourself. You can hear the whispers
              of the guardians, handpicked by Fortuna herself, as they oversee
              the game to ensure its fairness.{" "}
            </p>

            <p>
              {" "}
              You take a deep breath and purchase your ticket, feeling the
              excitement building within you. With every ticket you buy, you
              increase your chances of being blessed by Fortuna's divine power
              and winning big prizes...{" "}
            </p>
            <div className="app__lp-about_link">
              <Link href="/about"> Click to Learn More </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
