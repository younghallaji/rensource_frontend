import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
        <Container fluid="md">
            <Header/>
            <Row>
                <Col lg={6} sm={12} >
                    <h2>Powering Africa for Economic Growth</h2>
                    <p>Rensource develops, finances, and manages critical energy infrastructure for African enterprises.</p>
                    <Link to={'/about'} className="home-button">
                        Learn More
                        <img src={images.arrow} alt="resource-arrow" />
                    </Link>
                </Col>

                <Col lg={6} sm={12} className="home-hero ">
                    <img src={images.heroImg} className='responsive-img' alt="rensource-hero"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home