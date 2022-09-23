import React from 'react'
import Header from '../Header/Header';
import { Container,  Card } from 'react-bootstrap';
import images from '../../constants/images';
import './about.css';

const AboutHome = () => {
    return (
        <div className='about-home'>
            <Container fluid="md">
                <Header/>
                <div className='about-row'>
                    <div className='first-col'>
                    <label>About Rensource Energy</label>
                        <h2>Powering Africa’s C&I Sector with Clean Energy</h2>
                        <p className='content'>Rensource is a leading West African provider of renewable energy-related services, it specializes in the development and financing of solar-hybrid captive power provision which provides commercial, industrial, and utility customers, solutions that bridge the gap between desired and available power. Rensource deploys any combination of solar power and fossil-fired power, primarily gas and diesel but also including natural gas with appropriate battery storage solutions.</p>
                        <Card className='about-mission' >
                            <p className='mission-title'>Mission</p>
                            <p className='mission-body'>
                            Develop physical and digital infrastructure to accelerate the productivity growth of small and medium-sized businesses.
                            </p>
                        </Card>
                    </div>
                    
                    <div className='second-col about-col-wrapper'>
                    <div className="about-home-col-2">
                            
                            <img src={images.aboutHero} alt="rensource-hero"/>
                            </div>
                    </div>
                </div>
            </Container>
        </div>
      )
}

export default AboutHome