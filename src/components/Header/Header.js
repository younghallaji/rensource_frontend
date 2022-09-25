import React, { useRef } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import './header.css';

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }
  return (
    <header className='nav-header'>
        <h3 className='nav-brand'>
          <Link to={'/'}><img src={images.rensource} alt='Rensource-Logo'/></Link>
        </h3>

        <nav className='nav-wrapper nav-wrapper-web' ref={navRef}>
            <h3 className='nav-brand-mobile'>
              <Link to={'/'}><img src={images.footerLogo} alt='Rensource-Logo'/></Link>
              <Button className='close-menu' onClick={showNavbar}>
                <FaTimes/>
              </Button>
              
            </h3>
              
              <Link to='/'><a className='header-link'>Home</a></Link>
              <Link to='/about'><a className='header-link'>About</a></Link>
              <Link to='/our-projects'><a className='header-link'>Our Projects</a></Link>
              <Link to='/offering'><a className='header-link'>Our Offerings</a></Link>
              <Link to='/news'><a className='header-link'>News</a></Link>
              {/* <Link to='/blog'><a className='header-link'>Blog</a></Link> */}
              <Link to='/faqs'><a className='header-link'>FAQ</a></Link>
              <Link to='/contact'><a className='header-link'>Contact Us</a></Link>
              
        </nav>
        
        <Button className=' open-menu' onClick={showNavbar}>
            <FaBars/>
        </Button>
    </header>
  )
}

export default Header