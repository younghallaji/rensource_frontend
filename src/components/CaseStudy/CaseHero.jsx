import React from 'react'
import { Card } from 'react-bootstrap'
import './casestudy.css';

const CaseHero = ({title}) => {
  return (
    <Card body className='hero-banner'>
        <center>
            <h2>{title}</h2>
        </center>
    </Card>
  ) 
}

export default CaseHero