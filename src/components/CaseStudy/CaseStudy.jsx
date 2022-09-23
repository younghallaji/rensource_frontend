import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CaseHero from './CaseHero';
import CaseOne from './CaseOne';
import CaseTwo from './CaseTwo';

const CaseStudy = () => {
  return (
    <>
        <Container>
            <Header />
        </Container>
        <CaseHero title={'Our Projects'}/>
        <div className='caseStudy'>
            <Container >
                <CaseOne />
                <CaseTwo />
            </Container>
        </div>
        <Footer />
    </>
  )
}

export default CaseStudy