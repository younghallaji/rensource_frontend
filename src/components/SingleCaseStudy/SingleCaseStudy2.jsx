import React from 'react'
import { Container, Card} from 'react-bootstrap'
import Header from '../Header/Header'
import SingleCaseHero from './SingleCaseHero'
import SingleCaseDetails from './SingleCaseDetails'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import images from '../../constants/images'

const SingleCaseStudy2 = () => {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <SingleCaseHero topic={'Our Projects'} title={'Powering Premium Poultry Farm with a 700kWp Solar PV'}/>
            
            <SingleCaseDetails 
                image={images.poultryHero}
                challengeContent={'Our client, Premium Poultry Farms (PPF) is one of Nigeria’s largest egg producers situated in Kuje, Abuja, producing over 5 million eggs per month. As they looked to enhance their production efforts with lower energy cost and the ability to monitor their energy consumption and cost, they entered into a power purchase agreement with Rensource and Empower New Energy. We conducted an energy audit to discover PPF’s energy requirements and developed a custom solution. After PPF was satisfied with our solution, we constructed a 700kWp PV solar farm. The project remains one of the largest power purchase agreements for solar energy signed in the C&I sector in Nigeria. '}
                // solutionTitle={'A solar hybrid solution delivered'}
                solutionContent={'The farm site was sectioned into 11 rows with each row having ground mount accessories and a total of 6 Huawei PV Inverters installed. Each inverter is rated 100kW resulting in a total installed capacity of 600kW. We installed a mix of 400W JS Solar Panels and 335W Canadian Solar panels (a total of 1872 PV panels) resulting in the peak capacity of 702kWp. A number of devices were also installed for control and remote monitoring. The site is powered via the public grid, although our PV solution is configured such that zero export from grid is achievable. This means that 100% of the load demand will be powered by the PV Solar Farm as long as the load required does not exceed the generation from the PV Panels. '}
                practicalContent={'Our operations and maintenance team provides support on-site and remotely 24/7 to ensure that preventive and corrective maintenance is carried out. We were also able to provide our client with access to a platform that monitors the system performance by which they can keep track of their power usage and cost of energy from any part of the world using their computers or smartphones. Our client now sees a substantially lower energy cost due to our solar PV technology. This project will generate up to 250MWh of energy while saving up to 840 tonnes of CO2 emissions per year.'}
              />
              <Container className='next-case-study'>
                <hr />
                <div className="next">
                    <p className="solution-title">Next Project</p>
                </div>
                <Link to={'/case-two-details'}>
                <Card className='col next-details col-md-6 col-sm-12'>
                    <div className="row">
                        <div className="col next-case-img col-sm-4 m-4">
                            <img src={images.valentine} alt="rensource-case-study" />
                        </div>
    
                        <div className="col col-sm-7 next-content">
                            <p style={{marginTop:'24px'}} className="solution-title">120kWp Solar PV Installation at Valentine Chicken, Kwara State.</p>
                            <p className="next-content">
                            Learn how one of the big players in the poultry industry increased its power reliability and savings on diesel.
                            </p>
                        </div>
                    </div>
                </Card>
                </Link>
              </Container>
            <Footer />
        </>
      )
}

export default SingleCaseStudy2