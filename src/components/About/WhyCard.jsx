import React from 'react'
import { Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'

const WhyCard = ({icon, title, content}) => {
  return (
    <Col lg='4' md='6' sm='12'>
      <IconContext.Provider value={{color:'#fff', size:'1.5em'}}>
        <center>
          <div className="why-icon">{icon}</div> 
          <div className="why-title">{title}</div>
          <div className="why-content">{content}</div>
        </center>
      </IconContext.Provider>
    </Col>
  )
}

export default WhyCard