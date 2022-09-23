import React from 'react'
import '../CaseStudy/casestudy.css';

const HeroImage = ({image}) => {
  return (
    <div className='case-hero-image'>
        <img src={image} alt="rensource-case-study" />
    </div>
  )
}
 
export default HeroImage