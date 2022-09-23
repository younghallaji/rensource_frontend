import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Contactcard from './Contactcard'
import './contact.css' 
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero'

const Contact = () => {
  return (
    <>
        <Container>
            <Header/>
        </Container>
        <SingleCaseHero topic={'For partnerships or enquiries'} title={'Contact Us'} />
            <div className='contact-bg'>
                <Contactcard />
            </div>
        <Footer style={{position:'relative'}}/>
    </>
  )
}

export default Contact