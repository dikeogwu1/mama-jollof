import React from 'react'
import { Link } from 'react-router-dom'

const RecipePage = () => {
  return (
    <div>
      {/* nav bar */}
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
                <Link
                  to='/'
                  class='nav-link active'
                  aria-current='page'
                  href='#'
                >
                  <span className='mover'>Home</span>
                </Link>
              </li>
              {/* dropdown */}

              <li class='nav-item dropdown more-pages'>
                <a
                  class='nav-link dropdown-toggle'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <span className='mover'>Services</span>
                </a>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link to='/about' class='dropdown-item'>
                      <span className='mover'>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact' class='dropdown-item'>
                      <span className='mover'>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <hr class='dropdown-divider' />
                  </li>
                  <li>
                    <Link to='/recipe' class='dropdown-item'>
                      <span className='d-active'>Recipe</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form class='d-flex more-pages'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <h1>hello from recipe</h1>
    </div>
  )
}

export default RecipePage
