import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <header className='center'>
    <div>
      <img src={logo} alt='' />
    </div>
    <div className='custom-select'>
      <select>
        <option value="">RCB</option>
        <option value="">CSK</option>
      </select>
      <span className='custom-arrow'></span>
    </div>
   
    
    </header>
    
  )
}

export default Header
