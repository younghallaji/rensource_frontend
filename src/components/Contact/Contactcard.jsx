import React from 'react'
import {Col, Container, Row, Form, Button, Spinner } from 'react-bootstrap';
import './contact.css'
import images from '../../constants/images';
import { FiMail, FiPhone, } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import {BsArrowRight } from "react-icons/bs"
import { IconContext } from 'react-icons';
import useFetch from '../../constants/useFetch';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { Url } from '../../constants/baseurl';
// import {useHistory} from 'react-router-dom';

const Contactcard = () => {
    const [subject, setSubject] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [message, setMessage] = useState();
    const [isPending, setIsPending] = useState(false);
    // const history = useHistory();
    const {data:info, loading} = useFetch(Url+'CompanyInfo/CompanyInfo');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsPending(true);
        const messageBody = {
            sendersName: name,
            messageSubject: subject,
            message: message,
            emailAddress: email,
            phoneNumber: number
        }
        const url = Url+'ContactUs/CreateMessage'
        fetch(url,
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(messageBody)
            })
        .then((res) => {
            if (res.status === 200) {
                swalWithBootstrapButtons.fire({
                    icon: 'success',
                    title: 'Sent',
                    text: 'Message Successfully Sent'
                  })
                setIsPending(false);
                setEmail('')
                setMessage('')
                setName('')
                setSubject('')
                setNumber('')
            } else {
                swalWithBootstrapButtons.fire({
                    icon: 'error',
                    title: 'Opps...',
                    text: 'An Error Occured, Please Try Again',
                    confirmButtonColor: '#3085d6'
                  })
                
                setIsPending(false);
            }
        })
    }
  return (
        <Container fluid='md' className='contact-wrapper'>
            <div className="contact">
            <Row>
                
                <Col md={5} sm={12}>
                <IconContext.Provider value={{size:'1.5em', color:'#fff'}}>
                    <div className="contact-details">
                        <Row>
                            <Col sm={2}>
                                <FiMail/>
                            </Col>
                            <Col sm={9}>
                                <p className='chat-title'>Chat with us</p>
                                <p className='chat-details'>{
                                    
                                loading ? <div>...loading</div> : info.emailAddress}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={2}>
                                <FiPhone/>
                            </Col>
                            <Col sm={9}>
                                <p className='chat-title'>Phone</p>
                                <p className='chat-details'>{loading ? <div>...loading</div> : info.phoneNumber1}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={2}>
                                <GoLocation/>
                            </Col>
                            <Col sm={9}>
                                <p className='chat-title'>Office</p>
                                <p className='chat-details'>
                                    <p className="address">
                                        {loading ? <div>...loading</div> : info.headOfficeAddress}
                                    </p>
                                    <div className="address">
                                    {loading ? <div>...loading</div> : info.officeAddress} 
                                    </div>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </IconContext.Provider>
                </Col> 
                
                <Col md={7} sm={12}>
                    <div className="card contact-form">
                        <center>Please fill out this form</center>
                    
                    <Form className='row' onSubmit={handleSubmit}>
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control required type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>Subject*</Form.Label>
                            <Form.Control required type="text" value={subject}  onChange={(e)=>setSubject(e.target.value)} />
                        </Form.Group>

                        <Form.Group className=" col-md-6" controlId="formBasicPassword">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control required type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className=" col-md-6" controlId="formBasicPassword">
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control required type="tel" value={number}  onChange={(e)=>setNumber(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicCheckbox">
                            <Form.Label>Message*</Form.Label>
                            <textarea required className='form-control' value={message}  onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </Form.Group>
                        <Col sm={12}>
                            {!isPending &&
                                <Button type="submit" >
                                    Send Message <BsArrowRight />
                                </Button>
                            }

                            {
                                isPending &&
                                <Button type="submit" disabled>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        />Sending .... 
                                </Button>
                            }
                        </Col>
                    </Form>
                    
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
  )
}

export default Contactcard