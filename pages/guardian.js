import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import guardian1 from '../assets/images/guardian1.jpeg'
import guardian2 from '../assets/images/guardian2.jpeg';
import guardian3 from '../assets/images/guardian3.jpeg';
import guardian4 from '../assets/images/guardian4.png';

export default function Guardian() {
  return (
    <div className="app__guardian section__container">
      <div className="app__guardian-container">
        <div className="app__guardian-header">
          <h1> The Fortuna NFT Guardian Collections </h1> 
          <p> Get ready for the most exciting NFT drop this year! The lottery has 100 NFT holders, known as guardians, who are entitled to 20% of the funds from the ticket sales at the end of the drawing. The guardians are represented as unique NFTs that can be purchased on the Abitrum chain and traded with ETH. </p>
        </div>

        <div className="app__guardian-grid">
          <div className="app__guardian-grid_item -item1">
            <Image src={guardian1} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item2">
            <Image src={guardian2} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item3">
            <Image src={guardian3} alt="Fortuna Guardian" />
          </div>
          <div className="app__guardian-grid_item -item4">
            <Image src={guardian4} alt="Fortuna Guardian" />
          </div>
        </div>

        <div className="app__guardian-btns">
          <div className="app__guardian-btn">
            <button disabled={true}> Become A Guardian </button>
          </div>
        </div>

        <div className="app__guardian-row -responsibilities">
          <h2> Roles of Fortuna Guardian Hodlers  </h2>
          <h4> As a holder of the Guardian NFT, you are part of a special group of individuals who have been selected to help promote and grow Divine Draw. To fulfill this role, we have created a list of activities that you can engage in to spread the word about the project: </h4>

          <div className="app__guardian-fields">
            <div className="app__guardian-field">
              <p> 1. Share your Guardian NFT on social media: Post your NFT on your social media accounts and tag Divine Draw. Share with your followers what makes this project unique and why you are proud to be a part of it. </p>
            </div>
            <div className="app__guardian-field">
              <p> 2. Promote Divine Draw on social media: Use your social media platform to promote Divine Draw. Share updates, news, and announcements with your followers and encourage them to participate. </p>
            </div>
            <div className="app__guardian-field">
              <p> 3. Participate in the Divine Draw community: Engage with the Divine Draw community on Telegram, Discord, and other social media platforms. Share your thoughts, ideas, and feedback to help the project grow. </p>
            </div>
            <div className="app__guardian-field">
              <p> 4. Create content: Use your creativity to create unique content that promotes Divine Draw. This could be videos, memes, or blog posts. Share your content on social media and tag Divine Draw. </p>
            </div>
            <div className="app__guardian-field">
              <p> 5. Participate in events: Join Divine Draw events and participate actively. Share your experience with others and encourage them to participate in future events. </p>
            </div>
          </div>

          <h6> By engaging in these activities, you are not only helping to grow the Divine Draw community but also contributing to the success of the project. As a thank you for your efforts, we will be offering exclusive benefits to Guardian NFT holders, including airdrops, giveaways, and more. </h6>
        </div>
      </div>
    </div>
  )
}
