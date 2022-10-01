import React from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import SingleCaseHero from './SingleCaseHero';
import SingleCaseDetails from './SingleCaseDetails';
import Footer from '../Footer/Footer';
import images from '../../constants/images';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../constants/useFetch';
import { Url } from '../../constants/baseurl';
import { useState, useEffect } from 'react';

const SingleCaseStudyOne = () => {
  const {id} = useParams();
  const [next, setNext] = useState("")
  const {data:info, loading, error} = useFetch(Url+'Projects/Project?Id='+id)
  // const {data:nextPrj, waiting} = useFetch(Url+'Projects/AllProjects?pageNumber=1&pageSize=3')
  
  
  useEffect(()=>{
    setNext("")
    const getPress = async () =>{
      const res = await fetch(Url+'Projects/AllProjects?pageNumber=1&pageSize=3');
      const data = await res.json()
      let nextPrj = data.data.filter((project) => project.id != id && project.projectOverview != "")
      setNext(nextPrj);
      // setWaiting(false);
      // console.log(nextPrj)
    }
    getPress()
  }, [])

  const getPress = async () =>{
    const res = await fetch(Url+'Projects/AllProjects?pageNumber=1&pageSize=3');
    const data = await res.json()
    let nextPrj = data.data.filter((project) => project.id != id && project.projectOverview != "")
    setNext(nextPrj);
    // setWaiting(false);
    // console.log(nextPrj)
  }
  
  return (
    <>
    
        <Container>
            <Header />
        </Container>
        {loading &&
          <Container>
              <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>
          </Container>
        }
        {
          info &&
          <>
            <SingleCaseHero topic={'Our Project'} title={info.singlePageTitle}/>
            <SingleCaseDetails 
                image={info.image}
                challengeContent={info.projectOverview}
                // solutionTitle={'New Power Installed'}
                solutionContent={info.technicalInformation}

                practicalContent={info.practicalBenefits}
              />
          </>
        }
        
          <Container className='next-case-study'>
            <hr />
            <div className="next">
                <p className="solution-title">Next Project</p>
            </div>
            
             
            {
                (next == "") ? 
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
              </Spinner> : 
              
              <Link to={'/project/'+next[1].id}>
              <Card onClick={getPress()} className='col next-details col-md-6 col-sm-12'>
            <div className="row">
                <div className="col next-case-img col-sm-4 m-4">
                    <img src={next[1].image} alt="" />
                </div>

                <div className="col col-sm-7 next-content">
                    <p style={{marginTop:'24px'}} className="solution-title">{next[1].title}</p>
                    <p className="next-content">
                      {next[1].description}
                    </p>
                </div>
            </div> 
        </Card>
        </Link>
              }
            
            
            
          </Container>
        <Footer />
    </>
  )
}

export default SingleCaseStudyOne