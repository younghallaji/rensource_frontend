import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import images from '../../constants/images';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container className='partner-wrapper'>
        <center>
            <h2>Our Partners</h2>
        
        
        <Row>
          <Slider {...settings}>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.huawei} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.bos} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.canadianSolar} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.jinkoSolar} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.schneider} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.victronEnergy} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.jaSolar} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.cenergy} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.sma} /> </Col>
            <Col sm className='partner-col'> <img alt='rensource-partner' src={images.sungrow} /> </Col>
          </Slider>
        </Row>
        

        </center>
    </Container>
  )
}

export default Partner