import React from 'react';
import { Form } from 'react-bootstrap';
import './press.css'

const Filter = () => {
  return (
    <div className='filter-wrapper'>
        <div className='search'> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder='Search'/>
                </Form.Group>
            </Form>
        </div>
        <div className='sort'> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select aria-label="Default select example">
                        <option>Filter News</option>
                        <option>Newer first</option>
                        <option>Older first</option>
                    </Form.Select> 
                </Form.Group>
            </Form>
        </div>
    </div>
  )
}

export default Filter