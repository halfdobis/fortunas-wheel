import React from 'react';
import how_it_works from '../data/how-it-works';

export default function HowItWorks() {
  return (
    <div className="app__work section__container">
      <div className='app__work-container'>
        <div className="app__work-container__header">
          <h2> How it works </h2>
          <h3> The ultimate lottery game hosted by the goddess of luck, Fortuna. </h3>
        </div>
        
        <div className="app__work-body">  
          { how_it_works.map(item => (
            <div className="app__work-row" key={item.id}>
              <div className="app__work-row_header">
                <div className="app__work-steps">
                  <h3> { item.id } </h3>
                </div>
              </div>
                <div className="app__work-row_field">
                  <h3> { item.title } </h3>
                  <p> { item.subtitle } </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
