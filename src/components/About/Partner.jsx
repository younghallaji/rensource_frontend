import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import images from '../../constants/images';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetch from '../../constants/useFetch';
import { Url } from '../../constants/baseurl';

const Partner = () => {
  const {data:partners, loading, error} = useFetch(Url+'Partners/AllPartner')
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

            {error && <div>{error}</div>}
          {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
        
        
        <Row className='partners-wrapper'>
          <Slider {...settings}>
          {partners && 
                partners.reverse().map(partner => (
                  <Col sm className='partner-col'> <img alt='rensource-partner' src={partner.image} /> </Col>
            
                ))
            }
           
          </Slider>
        </Row>
        

        </center>
    </Container>
  )
}

export default Partner