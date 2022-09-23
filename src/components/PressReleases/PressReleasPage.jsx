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
import pressList from '../../constants/presslist.json'


const PressReleasPage = () => {
  const [pressRelease, setPressRelease] = useState(pressList.slice(0,6));
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState()
  // useEffect(()=>{
  //   const getPress = async () =>{
  //     const res = await fetch('http://mutolib-001-site1.dtempurl.com/api/v1/PressRelease/AllPressRelease?pageNumber=1&pageSize=6');
  //     const data = await res.json()
  //     setPressRelease(data.data);
  //     setLoading(false)
  //     setCount(data.totalData)
  //     console.log(data)
  //   }
  //   getPress()
  // }, [])

  const fetchPress = async (currentPage) =>{
    const res = await fetch(`http://mutolib-001-site1.dtempurl.com/api/v1/PressRelease/AllPressRelease?pageNumber=${currentPage}&pageSize=6`);
      const data = await res.json()
      return data.data;
  }

  const handlePageChange = async (data) => {
    if (data.selected === 0){
      setPressRelease(pressList.slice(0,6))
    }else{
      setPressRelease(pressList.slice(6,12))
    }
    // let currentPage = data.selected + 1
    // const newPage = await fetchPress(currentPage)
    // console.log(newPage)
    // setPressRelease(newPage)
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
            <Row className='press-list'>
              <PressCard pressRelease={pressRelease} />
          </Row>
          <hr />
              <ReactPaginate 
              previousLabel =  {'Previous'}
              nextLabel = {'Next'}
              pageCount = {Math.ceil(2)}
              containerClassName={'pagination-wrapper'}
              previousClassName={'previous'}
              nextClassName={'next'}
              onPageChange={handlePageChange}
              pageClassName={'page-item'}
              activeClassName={'active'}
              breakLinkClassName={'page-item'}
              disabledClassName={'button-disabled'}
            />
            {/* <Row>
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
            } */}
            
        </Container>
        </div>
        <Footer/>
    </>
  )
}

export default PressReleasPage