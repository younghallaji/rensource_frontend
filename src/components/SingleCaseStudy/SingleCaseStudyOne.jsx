import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import SingleCaseHero from './SingleCaseHero';
import SingleCaseDetails from './SingleCaseDetails';
import Footer from '../Footer/Footer';
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const SingleCaseStudyOne = () => {
  return (
    <>
        <Container>
            <Header />
        </Container>
        <SingleCaseHero topic={'Our Project'} title={'Powering Valentine Chickens with a 120kWp Solar PV'}/>
        
        <SingleCaseDetails 
            image={images.valentineHero}
            // challengeTitle={'Increase Power Reliability; Savings on Diesel'}
            challengeContent={'Valentine Chickens is a poultry farm in Shonga, Kwara State with a processing plant that slaughters up to 25,000 birds per day and a feed mill producing 64mt of feed per day and providing frozen chicken to various parts of the country. Rensource deployed a 120kWp solar PV in one of the sites at Valentine Chicken for the purpose of “proof of concept” with the intention to develop a 5.128MW Solar-Gas Hybrid. '}
            // solutionTitle={'New Power Installed'}
            solutionContent={'The installation comprised 4 rows of roof-mounted 335W Canadian Solar PV panels, and 1 Huawei PV inverter (100kW rating) installed for a total of 120kWp together with a back-up diesel generator.'}

            practicalContent={'Our operations and maintenance team provides support on-site and remotely 24/7 to ensure operations run well. We gave our client access to a platform that helps them monitor their energy consumption and savings remotely to provide comfort. Our client’s diesel consumption on the site is reduced by approximately 30%. The solar PV plant will generate up to 160MWh of energy while saving up to 70 tonnes of CO2 emissions per year, improving air quality in Nigeria. '}
          />
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