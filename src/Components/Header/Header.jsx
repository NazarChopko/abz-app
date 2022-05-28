import React from 'react'
import logo from '../../libs/image/Logo.png'
import Button from '../Button/Button'

const Header = () => {
  return (
      <div className="container">
          <header className="header">
             <img className='logo' src={logo} alt="logo" />
              <div className='buttonsGroup'>
                  <Button>Users</Button>
                  <Button>Sign up</Button>
              </div>
          </header>
      </div>
    
  )
}

export default Header