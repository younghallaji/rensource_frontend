import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import Header from '../Header/Header';
import PressCard from './PressCard';
import Footer from '../Footer/Footer';
import SingleCaseHero from '../SingleCaseStudy/SingleCaseHero';
import Filter from './Filter';
import ReactPaginate from 'react-paginate'
import { useState } from 'react';
import { useEffect } from 'react';


const PressReleasPage = () => {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState()
  const [pressRelease, setPressRelease] = useState()
  useEffect(()=>{
    const getPress = async () =>{
      const res = await fetch('http://18.193.182.151:8080/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=6');
      const data = await res.json()
      setPressRelease(data.data);
      setLoading(false)
      setCount(data.totalData)
      console.log(data)
    }
    getPress()
  }, [])

  const fetchPress = async (currentPage) =>{
    const res = await fetch(`http://18.193.182.151:8080/api/v1/PressRelease/AllPressRelease?pageNumber=${currentPage}&pageSize=6`);
      const data = await res.json()
      return data.data;
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
            <Filter />
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