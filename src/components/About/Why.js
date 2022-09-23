import React from 'react'
import { Container, Row } from 'react-bootstrap'
import WhyCard from './WhyCard';
import { FiZap } from "react-icons/fi";
import {RiCurrencyLine} from 'react-icons/ri';
import {BsChat} from 'react-icons/bs' 
// FiSmile

const Why = () => {
  return (
    <div className='why-wrapper'>
        <center>
        <h2>Why Choose Us</h2>
        <p>
            Rensource has proven itself with a track record of reliability <br/> and consistency in the region.
        </p>
        </center>

        <Container fluid='md'>
        <Row className='why-row-1' >
            <WhyCard 
                icon={<FiZap/>}
                title={'Energy cost savings'}
                content={'The nature of our solutions guarantee a significant reduction in energy costs, especially as they relate to alternatives and fossil-fuel methods.'}
            />

            <WhyCard 
                icon={<RiCurrencyLine/>}
                title={'Payment Flexibility'}
                content={'Our customers have the option of choosing between a fixed or variable price or per kWh tariff to match their needs. In both cases we eliminate budget and forecasting uncertainties.'}
            />

            <WhyCard 
                icon={<BsChat/>}
                title={'24/7 Technical Support'}
                content={'Remote and on-site operations and maintenance teams readily available to provide support.'}
            />
        </Row>

        {/* <Row className='why-row-2'>
            <WhyCard 
                icon={<FiSmile/>}
                title={'Expert in Project Execution'}
                content={'Highly skilled engineering design and project teams to guarantee best in class project execution. '}
            />

            <WhyCard 
                icon={<BsCommand/>}
                title={'Expert in Project Execution'}
                content={'Provision of various financing options depending on contract type. Major variations cover outright client payments, part ownership by client or full ownership by client or full ownership by Rensource on a PPA'}
            />

            <WhyCard 
                icon={<BsChat/>}
                title={'24/7 Technical Support'}
                content={'Remote and on-site operations and maintenance teams readily available to provide support'}
            />
        </Row> */}
        </Container>

    </div>
  )
}

export default Why