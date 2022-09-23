import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container fluid='md' className='project-wrapper'>
        <center className="project-heading">
            <h2>Our Projects</h2>
            <p>Powering Africa</p>
        </center>
        <Row>
            <ProjectCard projectImg={images.projectOne} content='700kWp Solar-Powered PV Plant at Premium Poultry Farms, Kuje, Abuja.'/>

            <ProjectCard projectImg={images.projectTwo} content='120kWp Solar PV Installation at Valentine Chicken, Kwara State.'/>

            <ProjectCard projectImg={images.projectThree} content='40kWp Solar PV Installation at Rubis Energy, Nairobi, Kenya. '/>
        </Row>
        <center className='all-projects-btn mt-5 '>
            <Link to={'/our-projects'} className='home-button' href='/'>View all</Link>
        </center>
    </Container>
  )
}

export default Projects