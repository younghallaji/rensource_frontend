import React from 'react'
import { Card, Col } from 'react-bootstrap';
import {FaLinkedinIn} from 'react-icons/fa';



const ExecutiveCard = ({name, title, image, linkedin}) => {
  return (
    <Col lg={2} md={4} sm={6}>
        <Card className='executive-card'>
            <Card.Img variant="top" src={image} />
            <Card.Body className='exe-body'>
            <Card.Text>
                <p className='name'>{name}</p>
                <p className='title'>{title}</p>
                <a target={'_blank'} href={linkedin}><div className='linkedin'><FaLinkedinIn /></div></a>

            </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ExecutiveCard