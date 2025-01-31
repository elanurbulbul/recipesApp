import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='navbar-brand-wrapper'>
        <div className='container'>
          <Link to ='/' className='navbar-brand flex items-center'>aaa
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header