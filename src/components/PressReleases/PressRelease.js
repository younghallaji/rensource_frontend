import React, { useState } from 'react';
import PressCard from './PressCard';
import { Container, Row, Spinner } from 'react-bootstrap';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import useFetch from '../../constants/useFetch';
import pressList from '../../constants/presslist.json'
// import parse from 'html-react-parser';

const PressRelease = () => {
  const {data:pressRelease, loading, error} = useFetch('http://mutolib-001-site1.dtempurl.com/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=3');
 
  

  return (
    <div className='press-release'>
        <Container fluid='md'>
        <center className="press-heading">
            <h2>News</h2>
        </center>
        {/* <Row>
          {error && <div>{error}</div>}
          {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
          {pressRelease && <PressCard pressRelease={pressRelease} image={images.pressTwo} />}
            
        </Row> */}
        <Row >
            <PressCard pressRelease={pressList.slice(0, 3)} />
        </Row>
        {/* <Row>
            <PressCard image={images.pressThree} date='13 July 2022' title={'Rensource Launches Digital Platform for Small Medium Enterprises'} content={'Nigerian startup Rensource Energy has raised a $20 million Series A round co-led by CRE Venture Capital and the Omidyar network.The renewable energy company builds and operates solar-powered micro-utilities that provide electricity to commercial community structures...'}/>

            <PressCard image={images.pressTwo} date='13 July 2022' title={'Nigeria’s Rensource launches digital distribution platform for SMEs during lockdown'} content={'In recognition of its work in proffering solutions to Nigeria’s power problem, renewable energy firm, Rensource Distribution Energy Limited has won Excellence in Climate Solutions award at the Transformational Business Award in London. '}/>

            <PressCard image={images.pressThree} date='13 July 2022' title={'Rensource to power Nigerian SME productivity with $20 million funding'} content={''}/>
        </Row> */}
        <center className='all-projects-btn m-5'>
            <Link className='home-button' to={'/news'}>View all</Link>
        </center>
    </Container>
    </div>
  )
}

export default PressRelease