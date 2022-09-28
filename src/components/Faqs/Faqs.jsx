import React from 'react'
import { Accordion, Container, Spinner } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import FaqsAcordion from './FaqsAcordion'
import './faq.css'
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero'
import useFetch from '../../constants/useFetch'
import { Url } from '../../constants/baseurl'

const Faqs = () => {
    const {data:faqs, loading, error} = useFetch(`${Url}FAQs/AllFAQ`);
 
  return (
    <>
        <Container>
            <Header/>
        </Container>
        <SingleCaseHero title={'FAQ'} topic={"We’re here to help"} />
        <div className='press-bg'>
        <Container fluid className='faqs-wrapper' >
        <center>
            <h2>Frequently asked questions</h2>
            <p>Everything you need to know about Rensource Energy.</p>
            </center>
            {error && <div>{error}</div>}
          {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
        <Accordion alwaysOpen>
            {faqs && 
                faqs.reverse().map(faq => (
                    <FaqsAcordion 
                    header={faq.question}
                    content={faq.answer}
                    acckey={faq.id}>
                    
                </FaqsAcordion>
                ))
            }
            {/* <FaqsAcordion 
                header={'How does your solution work?'}
                content={'At Rensource, our solution is to harness solar energy from the sun to provide electricity for our clients using Power as A Service model. Our solar panels convert sunlight to electricity and this electricity in the form of Direct Current (DC) is connected to an inverter which then converts it to Alternating Current (AC) which is what most load appliances run on.'}
                acckey={'0'}>
                
            </FaqsAcordion>
            <FaqsAcordion 
                header={'Are there any hidden charges?'}
                content={'No, every amount payable is as stated/agreed with no hidden cost. However, in a case of tamper or damage resulting from customer error or negligence, we may charge for corrective maintenance.'}
                acckey={'1'}>
                
            </FaqsAcordion>

            <FaqsAcordion 
                header={'Can your solar energy power my machine?'}
                content={'Yes, our solar system can power any machine like printers, industrial ACs to even large lathe machines provided there is enough roof and ground space for solar PV mounting.'}
                acckey={'2'}>
                
            </FaqsAcordion>

            <FaqsAcordion 
                header={'How will your solution reduce my huge expenses?'}
                content={<div>Our solution provides cheaper electricity compared to your grid and or generator costs, although prices vary according to your load capacity and location – reach us <a href='https://bit.ly/rensourceenergy' target={'_blank'}>  here </a> for an energy audit to determine the cost.</div>}
                acckey={'3'}>
                
            </FaqsAcordion>

            <FaqsAcordion 
                header={'Which project have you done?'}
                content={<div>Please <a href='https://drive.google.com/file/d/1JhQN_hU7V-AIR5kkMUPTaZSklq6WqEEJ/view?usp=sharing' target={'_blank'}> Click here </a> to download our company profile and see our reference projects</div>}
                acckey={'4'}>
                
            </FaqsAcordion> */}
        </Accordion>
        </Container>
        </div>
        <Footer/>
    </>
  )
}

export default Faqs