import React, { useState } from 'react';

import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

function Acordion({ faq }) {
    const [ toggle_acordion, set_toggle_acordion ] = useState(false);

    return (
        <div className="app__faq-acordion">
            <div className="app__faq-acordion__title-box">
                <h3> { faq.question } </h3>
                <div className="app__faq-acordion__title-box__button">
                    { toggle_acordion ? (
                        <AiOutlineClose size={24} onClick={() =>  set_toggle_acordion(false)} />
                    ) : (
                        <AiOutlinePlus size={24} onClick={() =>  set_toggle_acordion(true)} />
                    )}
                </div>
            </div>
            { toggle_acordion && <div className="app__faq-acordion__subtitle-box scale-up-center">
                <p> { faq.answer } </p>
            </div> } 
        </div>
    )
}

export default Acordion;