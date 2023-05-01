import React, { useState } from 'react';
import Image from 'next/image';
import Roadmap from '../components/Roadmap';
import roadmap from '../data/roadmap';
import about from '../data/about';

import guardian from '../assets/images/guardian1.jpeg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function About() {
    const [ active, setActive ] = useState(3);
    
    const showMore = () => setActive(about.length);
    const showLess = () => setActive(3);

    return (
      <div className="app__about section__container">
        <div className="app__about-container">
            <div className="app__about-header">
                <h2> About The <br /> FortunaNFT Realm </h2>
            </div>
            <div className="app__about-row -about">
                <div className="app__about-col -left">
                    <Image src={guardian} alt="" />
                </div>
                <div className="app__about-col -right">
                    <div className="app__about-header">
                        <h2> About The <br /> FortunaNFT Realm </h2>
                    </div>
                    <div className="app__about-fields">
                       { about.map((item, index) => (
                           <div className="app__about-field">
                                <p> { item } </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Road Map */}
            <div className="app__about-row -roadmap">
                <div className="app__about-roadmap_header">
                    <h2> Follow the FortunaNFT Road Map </h2>
                </div>
                <div className="app__about-roadmap_body">
                    { roadmap.map(item => (
                        <Roadmap 
                            key={item.id}
                            roadmap={item}
                        />
                    ))}
                </div>
            </div>

            {/* <div className="app__about-row">
                <p> 
                    The roadmap for DivineDraw is focused on building a strong community, expanding to multiple blockchain platforms, and introducing new and exciting features to enhance the player experience. With regular events, cross-chain collaborations, and new lottery games, DivineDraw aims to become a leading platform for lottery gaming and a source of wealth and prosperity for its players. 
                </p>
            </div> */}
        </div>


        {/* Story */}
      </div>
    )
}
