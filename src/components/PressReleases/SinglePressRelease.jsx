import React from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row, Spinner, Card } from 'react-bootstrap'
import Header from '../Header/Header'
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero'
import images from '../../constants/images'
import Footer from '../Footer/Footer'
import { IconContext } from 'react-icons'
import {FaTwitter} from 'react-icons/fa';
// import {FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import { FiCopy } from "react-icons/fi";
import PressCard from './PressCard'
import { Link } from 'react-router-dom'
import useFetch from '../../constants/useFetch'
import ReactTooltip from "react-tooltip";
import { Url } from '../../constants/baseurl'

const SinglePressRelease = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let rndInt= Math.floor(Math.random() * 2) + 1;
    const childUrl = `PressRelease/AllPressRelease?pageNumber=${rndInt}&pageSize=3`
    const {id} = useParams();
    const url = window.location.href
    const {data:info, loading} = useFetch(`${Url}PressRelease/PressReleaseByTitle?title=${id}`);
    const {data:pressRelease, error} = useFetch(`${Url}${childUrl}`);
    {console.log(id)}
    
    const handleCopy = () => {
        navigator.clipboard.writeText(url).then(function() {
            let copyBtn = document.getElementById('copy');
            copyBtn.innerHTML='Link Copied';
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
         {loading && <Container>
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>}
        
        {error && <div>{error}</div>}

            {
            info &&
            <> 
           
           <SingleCaseHero 
                title={info.title} topic={'News'} 
                date={<>
                <span>{info.dateCreated.split("T")[0].split("-")[2]} </span>
                                  <span>{months[info.dateCreated.split("T")[0].split("-")[1]-1]} </span>
                                  <span>{info.dateCreated.split("T")[0].split("-")[0]} </span>
                </>}
            />
                <div className="press-content-single-press-release" > 

                <Card.Img variant="top" src={info.image} />
                <div className='content' dangerouslySetInnerHTML={{__html: info.content}}></div>
                
                <hr/>
        <Row>
            <Col lg={'5'} sm className='press-tag'>
                
                {
                    (info.tags.length > 0) ?
                    info.tags.split(",").map(tag =>
                        <span className='tag2'>{tag}</span>
                    ): <p></p>
                }
                
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
                        <a target={'_blank'} href={"https://twitter.com/share?text="+ info.title+"&url="+url}><FaTwitter className='m-1 press-icon'/></a>
                        {/* <FaInstagram className='m-1 press-icon'/>
                        <FaLinkedinIn className='m-1 press-icon'/> */}
                    </IconContext.Provider>
                </div>
            </Col>
        </Row>
                </div>
            </>
        }  
        
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
        {loading && <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
          {pressRelease && 
          <Row>
          <PressCard pressRelease={pressRelease} />
        </Row>
        }
    </Container>
    </div>
        <Footer/>
    </>
  )
}

export default SinglePressRelease