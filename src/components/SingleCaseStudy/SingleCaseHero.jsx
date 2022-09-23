import React from 'react'
import '../CaseStudy/casestudy.css';

const SingleCaseHero = ({title, topic, date}) => {
  return (
      <div className='hero-banner'>
          <center>
              <p>{topic}</p>
              <h2>{title}</h2>
              <p>{date}</p>
          </center>
           
      </div>
  )
}

export default SingleCaseHero