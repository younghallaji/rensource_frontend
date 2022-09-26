import React from 'react';
import {FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import images from '../../constants/images';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import useFetch from '../../constants/useFetch';
import { Url } from '../../constants/baseurl';
 
const Footer = () => {
  const {data:info, loading} = useFetch(Url+'CompanyInfo/CompanyInfo');
  return (
    <div className='footer'>
        <Container>
            <hr />
            <Row>
                <Col lg={2} sm={6}><img alt={'rensource-footer-icon'} className='m-2' src={images.footerLogo}/></Col>
                <IconContext.Provider value={{size:'1.5em'}}>
                <Col lg={2} sm={6} >
                    <a href={loading ? '' : info.twitter} target={'_blank'}> <FaTwitter style={{color:'white'}}  className='m-2 footer-icon'/> </a>
                    <a href={loading ? '' : info.instagram} target={'_blank'}> <FaInstagram style={{color:'white'}} className='m-2'/></a>
                    <a href={loading ? '' : info.linkedIn} target={'_blank'}> <FaLinkedinIn style={{color:'white'}} className='m-2'/></a>
                </Col>
                </IconContext.Provider>
                <Col lg={1}></Col>
                <Col sm >
                <Nav className="justify-content-end">
                <Nav.Link >
                    <Link className='text-white footer-link' to='/'>Home</Link>
                  </Nav.Link>

                
                <Nav.Link ><Link to='/about' className='text-white footer-link'>About Us</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/our-projects' className='text-white footer-link'>Our Projects</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/offering' className='text-white footer-link'>Our Offerings</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/news' className='text-white footer-link'>News</Link></Nav.Link>
                

                
                    {/* <Nav.Link><Link to='/blog' className='text-white footer-link'>Blog</Link></Nav.Link> */}
                

                
                    <Nav.Link><Link to='/faqs' className='text-white footer-link'>FAQ</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/contact' className='text-white footer-link'>Contact us</Link></Nav.Link>
                
            

            
                </Nav>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer