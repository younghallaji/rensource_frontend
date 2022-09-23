import React from 'react'
import { Accordion } from 'react-bootstrap'

const FaqsAcordion = ({header, content, acckey}) => {
  return (
    <Accordion.Item eventKey={acckey}>
        <Accordion.Header flush>{header} </Accordion.Header>
        <Accordion.Body dangerouslySetInnerHTML={{ __html: content }}></Accordion.Body>
    </Accordion.Item>
  ) 
}

export default FaqsAcordion