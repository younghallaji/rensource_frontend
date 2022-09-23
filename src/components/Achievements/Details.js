import React from 'react';
import images from '../../constants/images';

const Details = () => {
  return (
        
        <div className='enerdeal-row'>
          <div className='first-col'>
            <div className='enerdeal-col-1'></div>
              <img className='enerdeal-img' src={images.enerdealImg} alt='rensource-enerdeal' />
              <img className='enerdeal-icon' src={images.enerdealIcon} alt='rensource-enerdeal' />
            </div>
          <div className='second-col enerdeal'>
          <p className='enerdeal-title'>Enerdeal</p>
            <h2>Connecting Developers and Investors</h2>
            <p className='enerdeal-content'>A platform that connects project developers and investors in the renewable energy sector. Are you a developer or an investor? Click here for a myriad of opportunities.</p>
            <a href='/'>Coming Soon</a>
          </div>
        </div> 
  )
}

export default Details