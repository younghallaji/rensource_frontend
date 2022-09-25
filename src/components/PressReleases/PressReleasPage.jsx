import React from 'react'
import { Container, Row, Spinner, Form } from 'react-bootstrap'
import Header from '../Header/Header';
import PressCard from './PressCard';
import Footer from '../Footer/Footer';
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero';
import Filter from './Filter';
import ReactPaginate from 'react-paginate'
import { useState } from 'react';
import { useEffect } from 'react';


const PressReleasPage = () => {
  const [orderID, setOrderID] = useState(2)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState()
  const [pressRelease, setPressRelease] = useState()
  const [search, setSearch] = useState()
  useEffect(()=>{
    const getPress = async () =>{
      const res = await fetch('https://18.193.182.151:4431/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=6');
      const data = await res.json()
      setPressRelease(data.data);
      setLoading(false)
      setCount(data.totalData)
    }
    getPress()
  }, [])

  const fetchPress = async (currentPage) =>{
    const res = await fetch(`https://18.193.182.151:4431/api/v1/PressRelease/AllPressRelease?pageNumber=${currentPage}&pageSize=6`);
      const data = await res.json()
      if (orderID == 1) {
        return data.data;
      } else {
        return data.data.reverse();
      }
      
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`https://18.193.182.151:4431/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=20`)
    let result = await res.json()
    result = result.data
    console.log(result)
    result = result.filter((news)=>news.title == search)
    setPressRelease(result)

  }

  const handleFilter = async (order) => {
    setOrderID(order)
    const newPage = await fetchPress(1)
    console.log(order)
    console.log(newPage.reverse())
    if(order == 1){
      setPressRelease(newPage)
    }else{
      setPressRelease(newPage.reverse())
    }
    

  }

  const handlePageChange = async (data) => {

    let currentPage = data.selected + 1
    const newPage = await fetchPress(currentPage)
    console.log(newPage)
    setPressRelease(newPage)
  }
 

  return (
    <>
        <Container>
            <Header/>
        </Container>
        <SingleCaseHero title={'News'} topic={''}/>
        <div className='press-bg'>
        <Container>
            <div className='filter-wrapper'>
        <div className='search'> 
            <Form onSubmit={handleSearch}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search'/>
                </Form.Group>
            </Form>
        </div>
        <div className='sort'> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select aria-label="Default select example" onChange={(e) => handleFilter(e.target.value)}>
                        <option disabled>Filter News</option>
                        <option value={1}>Newer first</option>
                        <option value={2}>Older first</option>
                    </Form.Select> 
                </Form.Group>
            </Form>
        </div>
    </div>
            <h2 className='all-press'>All News</h2>
            <Row>
          {loading && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
          {pressRelease && <PressCard pressRelease={pressRelease}  />}
            
        </Row>

            <hr />
            {
              count &&
              <ReactPaginate 
              previousLabel =  {'Previous'}
              nextLabel = {'Next'}
              pageCount = {Math.ceil(count/6)}
              containerClassName={'pagination-wrapper'}
              previousClassName={'previous'}
              nextClassName={'next'}
              onPageChange={handlePageChange}
              pageClassName={'page-item'}
              activeClassName={'active'}
              breakLinkClassName={'page-item'}
              disabledClassName={'button-disabled'}
            />
            } 
            
        </Container>
        </div>
        <Footer/>
    </>
  )
}

export default PressReleasPage