import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdStar } from 'react-icons';

const Roadmap = ({ roadmap }) => {
    const [ visible, setVisible ] = useState(false);
    
    return (
        <div className="app__roadmap">
            <div className="app__roadmap-container">
                <div className="app__roadmap-header">
                    <h2> { roadmap.title } </h2>
                    <div className='icons'>
                        { visible && <IoIosArrowUp 
                            size={32}
                            onClick={() => setVisible(false)} 
                        />}
                        { !visible && <IoIosArrowDown 
                            size={32}
                            onClick={() => setVisible(true)} 
                        />}
                    </div>
                </div>
                <div className={`app__roadmap-body ${ visible ? "-visible" : "-hidden"}`}>
                    <div>
                        {roadmap.maps.slice(0,2).map((item, index) => (
                            <p key={index}> { item } </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap;