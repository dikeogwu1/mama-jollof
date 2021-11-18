import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light mx-sm-5 my-sm-3'>
        <div class='container-fluid'>
          <Link to='/' class='navbar-brand logo' href='#'>
            <span className='mama'>mama</span>
            <span className='jollof'>Jollof</span>
          </Link>
          <button
            class='navbar-toggler btn-primary'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link to='/' class='nav-link ' aria-current='page'>
                  <span className='mover'>Home</span>
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/about' class='nav-link'>
                  <span className='mover'>About</span>
                </Link>
              </li>
              <li class='nav-item'>
                <Link to='/recipe' class='nav-link mover'>
                  <span className='mover'>Recipe</span>
                </Link>
              </li>
            </ul>
            <Link to='/contact'>
              <button className='btn btn-primary d-active'>Contact</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default ContactPage
