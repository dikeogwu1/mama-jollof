import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// import recipe css
import './recipe.css'
// import global store
import { useGlobalContext } from '../Global/Context'
// import axios
import axios from 'axios'

const RecipePage = () => {
  const { search, setSearch } = useGlobalContext()
  const menuContainer = useRef(null)
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRecipe = async () => {
    setLoading(true)
    try {
      const item = await axios({
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search',
        params: {
          query: search,
          number: '30',
        },
        headers: {
          'x-rapidapi-host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_MY_KEY,
        },
      })
      const data = item.data.menuItems
      if (data.length > 1) {
        setMenu(data)
        setLoading(false)
      } else {
        setMenu(data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRecipe()
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (menuContainer.current.value) {
      setSearch(menuContainer.current.value)
    }
  }

  if (loading) {
    return (
      <section className='big'>
        <div className='nav-box'>
          <nav className='navbar navbar-expand-lg navbar-light mx-sm-5 my-sm-3'>
            <div className='container-fluid'>
              <Link to='/' className='navbar-brand logo'>
                <span className='mama'>mama</span>
                <span className='jollof'>Jollof</span>
              </Link>
              <button
                className='navbar-toggler btn-primary'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link
                      to='/'
                      className='nav-link active'
                      aria-current='page'
                    >
                      <span className='mover'>Home</span>
                    </Link>
                  </li>
                  {/* dropdown */}

                  <li className='nav-item dropdown more-pages'>
                    <div
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <span className='mover'>Services</span>
                    </div>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <Link to='/about' className='dropdown-item'>
                          <span className='mover'>About</span>
                        </Link>
                      </li>
                      <li>
                        <Link to='/contact' className='dropdown-item'>
                          <span className='mover'>Contact</span>
                        </Link>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <Link to='/recipe' className='dropdown-item'>
                          <span className='d-active'>Our menu</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form
                  className='d-flex more-pages bg-white'
                  onSubmit={handleSubmit}
                >
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    ref={menuContainer}
                  />
                  <button className='btn btn-outline-success' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div className='sinner-box'>
          <img src='./Spinner-3.gif' alt='gif' />
        </div>
      </section>
    )
  }

  return (
    <div>
      {/* nav bar */}
      <div className='nav-box'>
        <nav className='navbar navbar-expand-lg navbar-light mx-sm-5 my-sm-3'>
          <div className='container-fluid'>
            <Link to='/' className='navbar-brand logo'>
              <span className='mama'>mama</span>
              <span className='jollof'>Jollof</span>
            </Link>
            <button
              className='navbar-toggler btn-primary'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link active' aria-current='page'>
                    <span className='mover'>Home</span>
                  </Link>
                </li>
                {/* dropdown */}

                <li className='nav-item dropdown more-pages'>
                  <div
                    className='nav-link dropdown-toggle'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <span className='mover'>Services</span>
                  </div>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <Link to='/about' className='dropdown-item'>
                        <span className='mover'>About</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/contact' className='dropdown-item'>
                        <span className='mover'>Contact</span>
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <Link to='/recipe' className='dropdown-item'>
                        <span className='d-active'>Our menu</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form
                className='d-flex more-pages bg-white'
                onSubmit={handleSubmit}
              >
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  ref={menuContainer}
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <section className='menu-container'>
        <article className='menu-items-wrapper mb-3 mb-sm-0 row mx-3 mx-sm-0 gy-3'>
          {menu.length < 1 ? (
            <h4 className='mx-3 mx-sm-5'>we could not fined your meal</h4>
          ) : (
            menu.map((meal, index) => {
              const { id, image, title, restaurantChain } = meal
              return (
                <Link
                  key={id}
                  to={`/single/${id}`}
                  className='menu-item col-sm-4 col-lg-3 '
                >
                  <div className='menu-img-wrapper'>
                    <img src={image} alt={title}></img>
                  </div>

                  <h5 className='mt-2 meal-tittle'>{title}</h5>
                  <p className='text-dark g-topic'>{restaurantChain}</p>
                </Link>
              )
            })
          )}
        </article>
      </section>
    </div>
  )
}

export default RecipePage
