import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Page from './Page'

const NotFound = () => {
  return (
    <div className='home'>
        <Container>
            <Header/>
            <Page/>
        </Container>
        <Footer/>
    </div>
  )
}

export default NotFound