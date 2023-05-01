import React from 'react';
import Image from 'next/image';

function Guardian({ guardian, item}) {
  return (
    <div className="app__guardian-image">
        <Image 
          src={guardian} 
          alt="Fortuna Guardian"
          className={item}
        />
    </div>
  )
}

export default Guardian;