import React from 'react';
import Image from 'next/image';

function Guardian({ guardian }) {
  return (
    <div className="app__guardian-image">
        <Image src={guardian} alt="Fortuna Guardian" />
    </div>
  )
}

export default Guardian;