import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row, Spinner, Card } from 'react-bootstrap'
import Header from '../Header/Header'
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero'
import images from '../../constants/images'
import Footer from '../Footer/Footer'
import { IconContext } from 'react-icons'
import {FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import { FiCopy } from "react-icons/fi";
import PressCard from './PressCard'
import { Link } from 'react-router-dom'
import useFetch from '../../constants/useFetch'
import pressList from '../../constants/presslist.json'
import { useState } from 'react'
import ReactTooltip from "react-tooltip";

const SinglePressRelease = () => {
    const {id} = useParams();
    const listId = id - 1;
    const {data:info, loading} = useFetch('http://mutolib-001-site1.dtempurl.com/api/v1/PressRelease/PressRelease?Id='+id);
    const {data:pressRelease, error} = useFetch('http://mutolib-001-site1.dtempurl.com/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=3');
    
    const handleCopy = () => {
        const url = `respaced.in/rensource/index.html#/news/${id}`
        navigator.clipboard.writeText(url).then(function() {
            let copyBtn = document.getElementById('copy');
            copyBtn.setAttribute("event", "click");
            copyBtn.setAttribute("data-delay-hide", "100")
            copyBtn.setAttribute("data-for", "registerTip")
            copyBtn.setAttribute("data-tip", "")
            // document.getElementById('copy').click()
            console.log(copyBtn)
            // console.log('Copied!');
        }, function() {
            console.log('Copy error')
        });
    }
  
    return (
    <>
        <Container>
            <Header/>
        </Container>
      
         <>
           
                <SingleCaseHero title={pressList[listId].title} topic={'News'} date={pressList[listId].date}/>
                <div className="press-content-single-press-release" > 

                <Card.Img variant="top" src={require('../../assets/Press Release/Picture '+id+'.png')} />
                <div className='content' dangerouslySetInnerHTML={{__html: pressList[listId].content}}></div>
                
                <hr/>
        <Row>
            <Col lg={'5'} sm className='press-tag'>
                
                {/* {
                    info.tags.split(",").map(tag =>
                        <span className='tag2'>{tag}</span>
                    )
                } */}
                
                {/* <span className='tag1'>Solar</span>
                <span className='tag2'>Research</span> */}
            </Col>
            <Col lg='7' sm className='social-share'>
            <ReactTooltip type='success' delayHide={100} id="registerTip" place="top" effect="solid">
                Copied!
            </ReactTooltip>
                <div className='justify-content-end'>
                    <span className="copy-link" id='copy' onClick={handleCopy} >
                        <FiCopy/> Copy Link 
                    </span>
                    <IconContext.Provider value={{ color:'#98A2B3'}}>
                        <a target={'_blank'} href={"https://twitter.com/share?text="+ pressList[listId].title+"&url=respaced.in/rensource/index.html#/news/"+id}><FaTwitter className='m-1 press-icon'/></a>
                        <FaInstagram className='m-1 press-icon'/>
                        <FaLinkedinIn className='m-1 press-icon'/>
                    </IconContext.Provider>
                </div>
            </Col>
        </Row>
                </div>
            </>
        <div className='press-release'>
        <Container fluid='md'>
        <div className="press-heading-single">
            <h2>Related News</h2> 
            <Link className='single-press-all-button' to={'/news'}>
                View all posts &nbsp; 
                <img src={images.arrow} alt="" />
            </Link>
        </div>
        {/* {loading && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
          {pressRelease && 
          <Row>
          <PressCard pressRelease={pressRelease} />
        </Row>
        } */}
        <Row>
          <PressCard pressRelease={pressList.slice(0, 3)} />
        </Row>
    </Container>
    </div>
        <Footer/>
    </>
  )
}

export default SinglePressRelease