import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
import './404.css'

const Page = () => {
  return (
    <div className='error-wrapper'>
        <Row>
                <Col lg={6} sm={12} >
                    <h2>Page Not Found</h2>
                    <div className='error'>404</div>
                    <Link to={'/'} className="home-button">
                        Homepage
                        <img src={images.arrow} alt="resource-arrow" />
                    </Link>
                </Col>

                <Col lg={6} sm={12} className="home-hero ">
                    {/* <img src={images.heroImgTwo} className='responsive-img' alt="rensource-hero"/> */}
                </Col>
            </Row>
    </div>
  )
}

export default Page