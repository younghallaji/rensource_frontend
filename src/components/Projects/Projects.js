import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import useFetch from '../../constants/useFetch';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const {data:projects, loading, error} = useFetch('https://18.193.182.151:4431/api/v1/Projects/AllProjects?pageNumber=1&pageSize=6')
  return (
    <Container fluid='md' className='project-wrapper'>
        <center className="project-heading">
            <h2>Our Projects</h2>
            <p>Powering Africa</p>
        </center>
        {error && <div>{error}</div>}
          {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
        <Row>
        {projects && 
                projects.reverse().map(project => (
                  <ProjectCard projectImg={project.image} content={project.title}/>
            
                ))
            }
            
        </Row>
        <center className='all-projects-btn mt-5 '>
            <Link to={'/our-projects'} className='home-button' href='/'>View all</Link>
        </center>
    </Container>
  )
}

export default Projects