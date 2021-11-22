import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaPinterest,
  FaLinkedinIn,
  AiOutlineTwitter,
  FaInstagram,
} from 'react-icons/all'

const ContactPage = () => {
  // handle form subimt
  const handleForm = (e) => {
    e.preventDefault()
    alert('message sent')
  }
  return (
    <div>
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
                    <span className='mover'>Our menu</span>
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

      <section className='contact-us py-5 px-3 px-sm-5 bg-white'>
        <h4 className='g-topic text-center'>Look At This Awesomesouce!</h4>
        <article className='souce-wrapper row'>
          <div className='col-sm-4'>
            <div className='souce-img-wrapper'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637323680/mama%20jollof/recipe-1_mzsaan.jpg'
                alt='meal'
              />
            </div>
            <h5>Carne Asada</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </div>
          <div className='col-sm-4'>
            <div className='souce-img-wrapper'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637157559/mama%20jollof/recipe-2_spzf7v.jpg'
                alt='meal'
              />
            </div>
            <h5>Greek Ribs</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </div>
          <div className='col-sm-4'>
            <div className='souce-img-wrapper'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637323711/mama%20jollof/recipe-3_axqn1u.jpg'
                alt='meal'
              />
            </div>
            <h5>Vegetable Soup</h5>
            <p>Prep : 15min | Cook : 5min</p>
          </div>
        </article>
      </section>

      {/* our gallery */}
      <section className='text-center p-4 p-sm-3 bg-white'>
        <h3 className='g-topic'>our gallery</h3>
        <div className='underline mb-2'></div>
        <p className='story-tittle'>ipsum dolor sit amet.</p>
        <p className='categories mt-5 mb-3'>
          <span className='all-cate'>ALL</span> / <span>DESSERTS</span> /{' '}
          <span>RESTAURANT</span> / DINNER
        </p>
      </section>

      {/* our gallery images */}
      <section className='gallery-images-box row g-0'>
        {/* item 1 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637077879/mama%20jollof/1-03814.jpg_hdqzxy.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>jollof special</h5>
              <p>Dessert, Restaurant</p>
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225117/mama%20jollof/sp2_eziabr.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>ALIQUAM TINCIDUNT</h5>
              <p>restaurant</p>
            </div>
          </div>
        </div>
        {/* item 3 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637078169/mama%20jollof/1-07741.jpg_zepvtw.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>ganished bake</h5>
              <p>break your fast</p>
            </div>
          </div>
        </div>
        {/* item 4 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225153/mama%20jollof/sp1_qnxdwf.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>ALIQUAM TINCIDUNT</h5>
              <p>sure for dinner</p>
            </div>
          </div>
        </div>
        {/* item 5 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637157559/mama%20jollof/recipe-2_spzf7v.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>chicken Ribs fried</h5>
              <p>ready at lunch</p>
            </div>
          </div>
        </div>
        {/* item 6 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637079149/mama%20jollof/product3_bcimwf.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>barbie que</h5>
              <p>always available</p>
            </div>
          </div>
        </div>
        {/* item 7 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637078044/mama%20jollof/1-07640.jpg_pncxak.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>Carne Asada</h5>
              <p>Dessert, Restaurant</p>
            </div>
          </div>
        </div>
        {/* item 8 */}
        <div className='g-img-wrapper col-sm-3'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637323711/mama%20jollof/recipe-3_axqn1u.jpg'
            alt='meal'
            id='g-image'
          />
          <div className='image-desc-box'>
            <div className='g-desc'>
              <h5 className='mb-2 '>Vegetable Soup</h5>
              <p>break your fast</p>
            </div>
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section className='intouch-container pt-5'>
        <div className='intouch-wrapper text-white'>
          <section className='text-center p-4 p-sm-3'>
            <h3 className='g-topic'>get in touch</h3>
            <div className='underline mb-2'></div>
            <p className='story-tittle'>Lorem ipsum dolor sit amet.</p>
          </section>

          <article className='intouch-items-wrapper text-center row mx-3 mx-sm-5'>
            <div className='intouch-item-1 mb-5 mb-sm-0 col-sm-4'>
              <h4 className='g-topic'>Contact Info</h4>
              <p>
                732/21 Second Street, Manchester,
                <br />
                King Street, Kingston United
              </p>
              <p className='gold'>
                + 123 4567-32-21
                <br />+ 123 9876-54-43
              </p>
              <p>info@mail.com</p>
              <div className='icon-box row justify-content-evenly'>
                <div className='icon col-2 m'>
                  <FaFacebookF />
                </div>
                <div className='icon col-2'>
                  <AiOutlineTwitter />
                </div>
                <div className='icon col-2'>
                  <FaInstagram />
                </div>
                <div className='icon col-2'>
                  <FaGooglePlusG />
                </div>
                <div className='icon col-2'>
                  <FaLinkedinIn />
                </div>
                <div className='icon col-2'>
                  <FaPinterest />
                </div>
              </div>
            </div>

            <div className='intouch-item-1 mb-5 mb-sm-0 col-sm-4'>
              <h4 className='g-topic'>Open Hours</h4>
              <p>
                <span className='gold'>Monday — Thursday</span>
                <br />8 am — 11 pm
              </p>
              <p>
                <span className='gold'>Friday — Sunday</span>
                <br />
                11 am — 11 pm
              </p>
              <p>Note: Restaurant is closed on holidays.</p>
            </div>

            <div className='intouch-item-1 mb-5 mb-sm-0 col-sm-4'>
              <h4 className='g-topic'>Say Hello!</h4>
              <form className='form' onSubmit={handleForm}>
                <input
                  className='mb-2 px-1 d-block w-100'
                  type='text'
                  required
                  autoComplete='off'
                  placeholder='name'
                />
                <input
                  className='mb-2 px-1 d-block w-100'
                  type='email'
                  required
                  autoComplete='off'
                  placeholder='email'
                />
                <textarea
                  required
                  className='text-area mb-3 d-block w-100 px-1'
                  cols='25'
                  rows='3'
                ></textarea>
                <button
                  type='submit'
                  className='btn btn-outline-secondary d-block m-auto'
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
