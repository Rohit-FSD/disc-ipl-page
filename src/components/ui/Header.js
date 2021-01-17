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
        <option value="">SRH</option>
        <option value="">MI</option>
        <option value="">RR</option>
        <option value="">KXIP</option>
      </select>
      <span className='custom-arrow'></span>
    </div>
    </header>
  )
}

export default Header
