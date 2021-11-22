import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import single css
import './single.css'
import {
  BsFillClockFill,
  AiOutlineClockCircle,
  IoIosPeople,
} from 'react-icons/all'
import { useParams } from 'react-router'
// import axios
import axios from 'axios'

const SingleItem = () => {
  const [loading, setLoading] = useState(true)
  const [meal, setMeal] = useState({})
  const { id } = useParams()

  const fetchItem = async () => {
    setLoading(true)
    try {
      const item = await axios({
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/${id}`,
        headers: {
          'x-rapidapi-host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_MY_KEY,
        },
      })
      const data = item.data
      if (data.length > 1) {
        setMeal(data)
        setLoading(false)
      } else {
        setMeal(data)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItem()
    window.scrollTo({ top: 0 })
  }, [id])

  if (loading) {
    return (
      <section className='big'>
        <div className='nav-box'>
          <nav className='navbar navbar-expand-lg navbar-light mx-sm-5 my-sm-3'>
            <div className='container-fluid'>
              <Link to='/' className='navbar-brand logo' href='#'>
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
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 bg-white'>
                  <li className='nav-item'>
                    <Link to='/' className='nav-link ' aria-current='page'>
                      <span className='mover'>Home</span>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-link'>
                      <span className='mover'>About</span>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/recipe' className='nav-link mover'>
                      <span className='mover'>Recipe</span>
                    </Link>
                  </li>
                </ul>
                <div className='bg-white'>
                  <Link to='/contact'>
                    <button className='btn btn-primary d-active'>
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className='sinner-box'>
          <img src='../Spinner-3.gif' alt='gif' />
        </div>
      </section>
    )
  }

  return (
    <main>
      <div className='nav-box'>
        <nav className='navbar navbar-expand-lg navbar-light  mx-sm-5 my-sm-3'>
          <div className='container-fluid'>
            <Link to='/' className='navbar-brand logo' href='#'>
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
              <ul className='navbar-nav me-auto mb-2 mb-lg-0 bg-white'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link ' aria-current='page'>
                    <span className='mover'>Home</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>
                    <span className='mover'>About</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/recipe' className='nav-link mover'>
                    <span className='mover'>Recipe</span>
                  </Link>
                </li>
              </ul>
              <div className='bg-white'>
                <Link to='/contact'>
                  <button className='btn btn-primary d-active'>Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <section className='mx-3 mx-sm-5'>
        <div className='intro-wrapper row'>
          <div className='meal-img-wrapper col-sm-6'>
            <img src={meal.image} alt={meal.title} />
          </div>
          <div className='meal-text-box col-sm-6'>
            <h5 className='g-topic'>{meal.title}</h5>
            <p>
              Shabby chic humblebrag banh mi bushwick, banjo kale chips
              meggings. Cred selfies sartorial, cloud bread disrupt blue bottle
              seitan. Dreamcatcher tousled bitters, health goth vegan venmo
              whatever street art lyft shabby chic pitchfork beard. Drinking
              vinegar poke tbh, iPhone coloring book polaroid truffaut tousled
              ramps pug trust fund letterpress. Portland four loko austin
              chicharrones bitters single-origin coffee. Leggings letterpress
              occupy pour-over.
            </p>
            {/* serving duration */}
            <div className='time-wrapper text-center row'>
              <div className='prep-box col-4'>
                <BsFillClockFill className='text-primary serving-icon' />
                <h6>prep time</h6>
                <p>30 min.</p>
              </div>
              <div className='prep-box col-4'>
                <AiOutlineClockCircle className='text-primary serving-icon' />
                <h6>cooking time</h6>
                <p>15 min.</p>
              </div>
              <div className='prep-box col-4'>
                <IoIosPeople className='text-primary serving-icon' />
                <h6>serving</h6>
                <p>{meal.readableServingSize}</p>
              </div>
            </div>
            {/* tags */}
            <h5 className='g-topic text-center'>tags: </h5>
            <article className='tags'>
              {meal.breadcrumbs.map((one, index) => {
                return (
                  <h6
                    key={index}
                    className='bg-primary text-white p-2 tags-items'
                  >
                    {one}
                  </h6>
                )
              })}
            </article>
          </div>
        </div>

        {/* caloric breakdown */}
        <h3 className='breakdown mt-4 mt-sm-0'>caloric breakdown</h3>
        <section className='my-4'>
          <article className='d-sm-flex justify-content-between'>
            {/* nutrition */}
            <div className='nutrition-box'>
              {/* first */}
              <div className='nutrition mb-4'>
                <h4>
                  <span>carbs: </span>{' '}
                  {meal.nutrition.caloricBreakdown.percentCarbs}%
                </h4>
                <div className='nutri-underline'></div>
              </div>
              {/* second */}
              <div className='nutrition mb-4'>
                <h4>
                  <span>Fat: </span>{' '}
                  {meal.nutrition.caloricBreakdown.percentFat}%
                </h4>
                <div className='nutri-underline'></div>
              </div>
              {/* third */}
              <div className='nutrition mb-4'>
                <h4>
                  <span>protein: </span>{' '}
                  {meal.nutrition.caloricBreakdown.percentProtein}%
                </h4>
                <div className='nutri-underline'></div>
              </div>
            </div>
            {/* nutrients */}
            <div className='nutrients'>
              <h3 className='mb-4'>nutrients</h3>
              <aside className='row'>
                {meal.nutrition.nutrients.map((item, index) => {
                  return (
                    <div className='nutrition mb-4 col-sm-6' key={index}>
                      <h5>{item.name}</h5>
                      <div className='nutri-underline'></div>
                    </div>
                  )
                })}
              </aside>
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default SingleItem
