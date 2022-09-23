import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './offering.css';
import OfferingList from './OfferingList';
import OfferingCard from './OfferingCard';

const Offering = () => {
  return (
    <>
        <Container>
          <Header/>
        </Container>
        <SingleCaseHero title={'Offerings'}/>

        <div className='offering-bg'>
        <Container>
        <Row className='offering-row1' >
          <OfferingCard title={'Solar PV (+ batteries)'}
                content={'Provides solar power from a Photovoltaics (PV) system. The battery is charged with excess PV power generated and supplies load when PV power supply is low or unavailable (e.g. outside peak sun hours or cloudy days).'}
            />
            

            <OfferingCard 
                title={'Solar PV Hybrid (+ diesel/gas and grid):'}
                content={'PV diesel hybrid systems are power systems that combine solar power from a photovoltaic system with power from diesel generators. In a PV diesel hybrid system, the load demand at every point in time is met by the power generated from the PV system and also the diesel genset.'}
            />

            <OfferingCard 
                title={'Solar PV BESS (+ batteries, diesel/gas and grid):'}
                content={<div>This system provides power primarily using Solar PV source and battery support before making use of other power sources like grid or gen when not available. <br/> <br/>The BESS collects excess energy from the solar PV and stores it using battery storage technology and acts as a support when PV power supply is low or out (e.g. outside peak sun hours or cloudy days).</div>}
            />
        </Row>

        <Row>
            <Col md={6} className='offering-content'>
              <h2> Our offering selection process </h2>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
              </p>

              <OfferingList content={'We make use of a variety of technologies to deliver reliable, stable, safe and aﬀordable power supply to commercial and industrial users'}/>

              <OfferingList content={'Our approach is a custom-made design after a detailed assessment of your power needs; we only offer solutions that beat your current cost of power generation. In designing our solutions, we take a life-cycle view as sustainability is essential to us'}/>
              
              <OfferingList content={'You enter a Power Purchase Agreement (PPA) and pay a monthly fee to Rensource. This PPA will be governed by a Service Level Agreement (SLA) to ensure we deliver on our commitments. '}/>
            </Col>

            <Col md={6} className='offering-image'>
              {/* <img src={images.offering} /> */}
            </Col>
        </Row>
        </Container>
        </div>
       
        <Footer />
    </>
  )
}

export default Offering