import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
  return (
    <>
        {/* style={{paddingTop:'90px'}} , fixed='top'*/}
        <Navbar  expand="lg" style={{paddingTop:'40px'}} >
          <Navbar.Brand className='nav-brand'>
            <Link to={'/'}><img src={images.rensource} alt='Rensource-Logo'/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className="me-auto justify-content-end">
                  <Nav.Link >
                    <Link className='header-link' to='/'>Home</Link>
                  </Nav.Link>

                
                <Nav.Link ><Link to='/about' className='header-link'>About Us</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/our-projects' className='header-link'>Our Projects</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/offering' className='header-link'>Our Offerings</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/news' className='header-link'>News</Link></Nav.Link>
                

                
                    {/* <Nav.Link><Link to='/blog' className='header-link'>Blog</Link></Nav.Link> */}
                

                
                    <Nav.Link><Link to='/faqs' className='header-link'>FAQ</Link></Nav.Link>
                

                
                    <Nav.Link><Link to='/contact' className='header-link'>Contact us</Link></Nav.Link>
                
                
              </Nav>
              </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header