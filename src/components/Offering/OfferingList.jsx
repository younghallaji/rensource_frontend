import React from 'react'
import { IconContext } from 'react-icons'
import {BsCheck2} from 'react-icons/bs'

const OfferingList = ({content}) => {
  return (
    <div className='offering-list'>
        <IconContext.Provider value={{color:'#F4C263'}}>
        <div className="offering-icon"><BsCheck2/></div>
        </IconContext.Provider>
        <div className='content'>{content}</div> 
    </div>
  )
}

export default OfferingList