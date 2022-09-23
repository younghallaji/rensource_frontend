import React from 'react';
import {Col, Card } from 'react-bootstrap';

const ProjectCard = ({projectImg, content}) => {
  return (
            <Col lg={4} md={6} sm={12}>
            <Card className="project-card">
                <Card.Img variant="top" src={projectImg} />
                <Card.Body> 
                    <Card.Text className='project-content'>
                    {content}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
       
  )
}

export default ProjectCard