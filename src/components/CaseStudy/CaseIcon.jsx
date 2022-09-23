import React from 'react'
import { BiFolder } from "react-icons/bi";
import { IconContext } from 'react-icons';

const CaseIcon = () => {
  return (
    <IconContext.Provider value={{size:'1.5em', color:'#fff'}}>
      <div className="icon"><BiFolder/></div>
    </IconContext.Provider>
  )
}

export default CaseIcon