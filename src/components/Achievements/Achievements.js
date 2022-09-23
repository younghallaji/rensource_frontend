import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import Details from './Details';

const Achievements = () => {
  return (
    <Container fluid='md' className='achieve-wrapper'>
        <center className="achievement-heading">Achievements</center>
        <Row>
            <Card number={12} content={'Micro-utilities'}/>
            <Card number={10} title={'MW'} content={'Installed and projected capacity'}/>
            <Card number={5588} title={'MT'} content={'CO2 emissions saved'}/>
            <Card number={2}title={'MIL LITRES'} content={'Fuel saved'}/>
        </Row>
        <Details/>
    </Container>
  )
}

export default Achievements