import React from 'react'
import { Container, Row , Spinner} from 'react-bootstrap'
import ExecutiveCard from './ExecutiveCard'
import useFetch from '../../constants/useFetch'
import {Url} from '../../constants/baseurl'

const ExecutiveTeam = () => {
    const {data:executives, loading} = useFetch(`${Url}ExecTeamCategory/AllExecCategory`);
    
  return (
    // <>
    // <Container fluid='md' className='executive-content'>
    
    

    // <h2>Management Team</h2>

    //     <Row className='justify-content-center'>
    //         <ExecutiveCard title={'CEO, Executive Director'} name={'Prince Ojeabulu'} image={images.prince} linkedin={'https://www.linkedin.com/in/prince-ojeabulu-pmp-mba-0b3a5867'}/>
    //         <ExecutiveCard title={'VP, Commercial'} name={'Michael Iwu'} image={images.Michael} linkedin={'https://www.linkedin.com/in/michael-iwu-636b9366'}/>
    //         <ExecutiveCard title={'VP, Technical'} name={'Dennis Ogbeide'} image={images.Deniss} linkedin={'https://www.linkedin.com/in/dennisogbeide'}/>
    //         <ExecutiveCard title={'Financial Controller'} name={'Adebisi Adebayo'} image={images.Adebisi} linkedin={'https://www.linkedin.com/in/adebayo-adebisi-74168a10b'}/>
    //     </Row>

    //     <center><h2 >Board of Directors</h2></center>

    //     <Row className='justify-content-center'>
    //         <ExecutiveCard name={'Christopher Foy'} title={'Chairman'} image={images.christopher} linkedin={'https://www.linkedin.com/in/chris-foy-8a668a2b'} />
    //         <ExecutiveCard name={'Ademola Adesina'} title={'Founder, Non-Exec Dir'} image={images.Ademola}  linkedin={'https://www.linkedin.com/in/aadesina'}/>
    //         <ExecutiveCard name={'Luis Faria'} title={'Non-Executive Director'} image={images.Luis}  linkedin={'https://www.linkedin.com/in/luis-faria-6539551a'}/>
    //         <ExecutiveCard name={'Chris Aidun'} title={'Non-Executive Director'} image={images.Chris}  linkedin={'https://www.linkedin.com/in/christopher-aidun-65412474'}/>
    //         <ExecutiveCard name={'Jussi Savukoski'} title={'Co-Founder, Exec Dir'}  image={images.jussi} linkedin={'https://www.linkedin.com/in/jussisavukoski'}/>
    //         <ExecutiveCard name={'Prince Ojeabulu'} title={'CEO, Executive Director'} image={images.PrinceBoard}  linkedin={'https://www.linkedin.com/in/prince-ojeabulu-pmp-mba-0b3a5867'}/>
    //     </Row>
    // </Container>
    // </>


    <>
    <Container fluid='md' className='executive-content'>
    {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span></Spinner>}
    {
        
        executives && 
        executives.reverse().map((executive) => 
        <div>
            <h2>{executive.executiveTeamCategory.executiveTeamCategoryName}</h2>
            <Row className='justify-content-center'>
                {
                    executive.executiveTeams.map(team => 
                    <ExecutiveCard 
                        title={team.executiveRoles.executiveRoleName} 
                        name={team.firstName+" "+team.lastName} 
                        image={team.image}
                        linkedin={team.linkedIn}
                    />)
                }
            </Row>
        </div>
    )
    }
    

        
    </Container>
    </>
  )
}

export default ExecutiveTeam