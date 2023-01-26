import React, { useEffect } from 'react';
function Story() {
  return (
    <div className="app__story section__container">
        <div className="app__story-container">
            <div className="app__story-container__header">
                <h2> Fortuna History </h2>
            </div>
            <div className="app__story-container__img section__container">
                <video src={require("../assets/images/story.mp4")} controls={true} />
            </div>
            <div className="app__story-container__field">
                <p>Long ago, in a realm blessed by the great goddess of fortune, Fortuna, there was a monthly lottery event known as the Divine Draw. The event was held in Fortuna's grand palace, where the goddess would preside over the drawing and bless the lucky winners with wealth and prosperity. </p>
            </div>
            <div className="app__story-container__field">
                <p>The Divine Draw was not just any ordinary lottery event, for it was protected and overseen by 200 unique guardians, handpicked by Fortuna herself. These guardians were responsible for ensuring the transparency and fairness of the event, and were imbued with a fraction of Fortuna's power to guarantee the event's integrity. </p>
            </div>
            <div className="app__story-container__field">
                <p>Players from all over the realm would flock to the palace to purchase tickets for the Divine Draw. Each ticket cost $50 and gave the player a chance to win a share of the prize pool, which was made up of the funds raised from ticket sales. The more tickets a player purchased, the greater their chances of winning. </p>
            </div>
            <div className="app__story-container__field">
                <p>But the Divine Draw was not just about the chance to win wealth, for those who became guardians had a stake in the event's proceeds. Each month, 20% of the funds raised from ticket sales were distributed to the guardians, and Fortuna would also bless them with two free tickets for the next month's drawing as a token of her appreciation for their service.</p>
            </div>
            <div className="app__story-container__field">
                <p> And so, the Divine Draw became a cherished tradition in the realm, with players eagerly awaiting each month's drawing and guardians proudly protecting the integrity of the event. Fortuna's blessings were said to bring good luck and prosperity not only to the winners, but to all who participated. And so, come join the Fortuna's Divine Draw, purchase a ticket and let the goddess of fortune bless you with riches and prosperity.</p>
            </div>
        </div>
    </div>
  )
}

export default Story;