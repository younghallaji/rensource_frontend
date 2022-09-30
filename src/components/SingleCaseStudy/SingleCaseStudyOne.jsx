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

const SingleCaseStudyOne = () => {
  const {id} = useParams();
  const {data:info, loading, error} = useFetch(Url+'Projects/Project?Id='+id)
  
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
            <Link to={'/case-one-details'}>
            <Card className='col next-details col-md-6 col-sm-12'>
                <div className="row">
                    <div className="col next-case-img col-sm-4 m-4">
                        <img src={images.nextCaseOne} alt="" />
                    </div>

                    <div className="col col-sm-7 next-content">
                        <p style={{marginTop:'24px'}} className="solution-title">Powering Premium Poultry Farm</p>
                        <p className="next-content">
                        Learn how Rensource Energy helped Premium Poultry Farm Enhance its Production Effort and Provide Visibility on its Energy Consumption & Cost of Energy 
                        </p>
                    </div>
                </div> 
            </Card>
            </Link>
          </Container>
        <Footer />
    </>
  )
}

export default SingleCaseStudyOne