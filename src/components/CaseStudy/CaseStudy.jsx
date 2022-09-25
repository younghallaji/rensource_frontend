import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useFetch from '../../constants/useFetch';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CaseHero from './CaseHero';
import CaseOne from './CaseOne';
import CaseTwo from './CaseTwo';

const CaseStudy = () => {
  const {data:projects, loading, error} = useFetch('https://18.193.182.151:4431/api/v1/Projects/AllProjects?pageNumber=1&pageSize=3')
  return (
    <>
        <Container>
            <Header />
        </Container>
        <CaseHero title={'Our Projects'}/>
        <div className='caseStudy'>
            <Container >
                {error && <div>{error}</div>}
                {loading && 
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                }
              {projects && 
                      projects.reverse().map((project, index) => 
                      
                        (index % 2 == 0) ?
                          <CaseOne key={index} title={project.title} desc={project.description} image={project.image} id={project.id}/>
                          :
                          <CaseTwo key={index} title={project.title} desc={project.description} image={project.image} id={project.id}/>
                        
                        
                  
                      )
                  }
            </Container>
        </div>
        <Footer />
    </>
  )
}

export default CaseStudy