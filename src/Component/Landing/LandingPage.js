import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main>
      <header className='parent'>
        <nav class='navbar navbar-expand-lg navbar-dark'>
          <div class='container-fluid'>
            <Link to='/' class='navbar-brand logo' href='#'>
              <span className='mama'>mama</span>
              <span className='jollof'>Jollof</span>
            </Link>
            <button
              class='navbar-toggler'
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
                    <span className='d-active'>Home</span>
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
                        <span className='mover'>Recipe</span>
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
        <div className='nav-img-wrapper'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637079309/mama%20jollof/chef-girl_xrltnr.png'
            alt='cheff'
          />
          <div className='main-tittle-wrapper'>
            <h3 className='tittle-logo'>
              <span className='mama'>mama</span>
              <span className='jollof'>Jollof</span>
            </h3>
            <h3 className='main-tittle-desc'>
              welcome to your favourite kitchen !
            </h3>
            <div className='ready'>
              <h5 className='ready-text'>food is ready</h5>
              {/* first image */}
              <div className='ready-img-wrapper'>
                <img
                  src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637157559/mama%20jollof/recipe-2_spzf7v.jpg'
                  alt='food'
                />
              </div>
              {/* second image */}
              <div className='ready-img-wrapper'>
                <img
                  src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637078044/mama%20jollof/1-07640.jpg_pncxak.jpg'
                  alt='food'
                />
              </div>
              {/* third image */}
              <div className='ready-img-wrapper'>
                <img
                  src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637077879/mama%20jollof/1-03814.jpg_hdqzxy.jpg'
                  alt='food'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='after-nav'></section>

      {/* our story */}
      <section className='text-center p-4 p-sm-5 bg-white'>
        <h1>discover our story</h1>
        <div className='underline mb-5'></div>
        <p className='story-tittle'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quia laudantium totam. Fugiat nemo, tempora ratione praesentium facere
          quas inventore totam odit commodi delectus dolore harum porro
          molestias soluta sed provident consectetur omnis sequi? Quasi.
        </p>
      </section>
      <article className='story-box row mx-2 mx-sm-5 mb-5 justify-content-sm-evenly align-items-center'>
        <div className='story-images col-sm-6 '>
          <div className='story-img-wrapper-1'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637224620/mama%20jollof/ab1_g2yrkq.jpg'
              alt='chef'
            />
          </div>
          <div className='story-img-wrapper-2'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637224586/mama%20jollof/ab2_f2kzge.jpg'
              alt='chef'
            />
          </div>
        </div>
        <div className='story-text-wrapper col-sm-6'>
          <h3>our history</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            rerum quidem impedit ad nemo obcaecati beatae suscipit consectetur
            harum alias?
          </p>
          <div className='signature'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637224538/mama%20jollof/sign_go99ng.png'
              alt='signature'
            />
          </div>
        </div>
      </article>

      {/* our restaurant */}
      <article className='story-box  row mx-2 mx-sm-5 mb-3 justify-content-sm-evenly align-items-center'>
        {/* our restaurant article */}
        <div className='story-text-wrapper col-sm-6'>
          <h3>our restaurant</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            rerum quidem impedit .
          </p>
          <p>
            If you have any questions, we are here to support you 24/7. We do
            our best to make your life happier and easier! See you soon!
          </p>
          <div className='d-sm-flex justify-content-sm-between w-75'>
            <div>
              <h5 className='opening-date'>Monday — Thursday</h5>
              <p>8 am — 11 pm</p>
            </div>
            <div>
              <h5 className='opening-date'>Friday — Sunday</h5>
              <p>11 am — 11 pm</p>
            </div>
          </div>
        </div>

        {/* our restaurant images */}
        <div className='story-images col-sm-6 '>
          <div className='story-img-wrapper-1'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637224738/mama%20jollof/ab3_yfizio.jpg'
              alt='chef'
            />
          </div>
          <div className='story-img-wrapper-2'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637224705/mama%20jollof/ab4_yp7cog.jpg'
              alt='chef'
            />
          </div>
        </div>
      </article>

      {/* today's */}
      <section className='today bg-dark pb-5'>
        <section className='text-center p-4 p-sm-5  text-light'>
          <h1>today's special</h1>
          <div className='underline mb-5'></div>
          <p className='todays-desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium quia laudantium totam. Fugiat nemo, tempora ratione
            praesentium facere quas inventore totam odit commodi delectus dolore
            harum porro molestias soluta sed provident consectetur omnis sequi?
            Quasi.
          </p>
        </section>

        <section className='todays-item row mx-3 mx-sm-5'>
          {/* todays first item*/}
          <div className='dodays-item-box row col-sm-6 g-0'>
            <div className='todays-img-wrapper col-sm-6'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225153/mama%20jollof/sp1_qnxdwf.jpg'
                alt='food'
              />
            </div>
            <div className='todays-item-text-wrapper col-sm-6  pt-5 pt-sm-0 text-center'>
              <h5>CAMPO LINDO CHICKEN</h5>
              <p className='todays-item-desc'>
                Praesent dapibus, neque id cursus faucibus, tortor neque
              </p>
              <h4 className='opening-date'>
                $<span>17.00</span>
              </h4>
              <h6>in dinners</h6>
            </div>
          </div>

          {/* todays second item */}
          <div className='dodays-item-box row col-sm-6 g-0'>
            <div className='todays-img-wrapper col-sm-6'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225117/mama%20jollof/sp2_eziabr.jpg'
                alt='food'
              />
            </div>
            <div className='todays-item-text-wrapper col-sm-6 pt-5 pt-sm-0 text-center'>
              <h5>BROCCOLI SOUP</h5>
              <p className='todays-item-desc'>
                Praesent dapibus, neque id cursus faucibus, tortor neque
              </p>
              <h4 className='opening-date'>
                $<span>7.50</span>
              </h4>
              <h6>in breakfast</h6>
            </div>
          </div>

          {/* todays first item */}
          <div className='dodays-item-box row col-sm-6 g-0'>
            <div className='todays-item-text-wrapper col-sm-6 pt-5 pt-sm-0 text-center'>
              <h5>TUNA ROAST SOURCE</h5>
              <p className='todays-item-desc'>
                Praesent dapibus, neque id cursus faucibus, tortor neque
              </p>
              <h4 className='opening-date'>
                $<span>14.40</span>
              </h4>
              <h6>in dinners</h6>
            </div>
            <div className='todays-img-wrapper col-sm-6'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225258/mama%20jollof/sp3_ltgnfj.jpg'
                alt='food'
              />
            </div>
          </div>

          {/* todays second item */}
          <div className='dodays-item-box row col-sm-6 g-0'>
            <div className='todays-item-text-wrapper col-sm-6 pt-5 pt-sm-0 text-center'>
              <h5>CHOCOLATE FUDGE CAKE</h5>
              <p className='todays-item-desc'>
                Praesent dapibus, neque id cursus faucibus, tortor neque
              </p>
              <h4 className='opening-date'>
                $<span>13.10</span>
              </h4>
              <h6>in desserts</h6>
            </div>
            <div className='todays-img-wrapper col-sm-6'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225228/mama%20jollof/sp4_tpgjl6.jpg'
                alt='food'
              />
            </div>
          </div>
        </section>
      </section>

      <section className='our-team'>
        <section className='text-center p-4 p-sm-5 bg-white'>
          <h2>our team</h2>
          <div className='underline mb-5'></div>
          <p className='story-tittle'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            laudantium.
          </p>
        </section>

        <article className='px-3 px-sm-5 bg-white'>
          <div
            id='carouselExampleControls'
            class='carousel slide'
            data-bs-ride='carousel'
          >
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <div className='chefs-img-wrapper row bg-white'>
                  <div className='col-3 text-center'>
                    <div className='mr-chef '>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225493/mama%20jollof/mem4_wzqw1s.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>nadiya lile</h5>
                    <p className='chef-position'>cook</p>
                  </div>

                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225447/mama%20jollof/mem3_tzbffm.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>steph keleb</h5>
                    <p className='chef-position'>cretive director</p>
                  </div>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225423/mama%20jollof/mem2_j31civ.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>lady jane</h5>
                    <p className='chef-position'>cook</p>
                  </div>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225383/mama%20jollof/mem1_pe64rl.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>rolland helma</h5>
                    <p className='chef-position'>chef</p>
                  </div>
                </div>
              </div>
              {/* second carousel */}
              <div class='carousel-item'>
                <div className='chefs-img-wrapper bg-white row'>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225383/mama%20jollof/mem1_pe64rl.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>rolland helma</h5>
                    <p className='chef-position'>chef</p>
                  </div>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637080155/mama%20jollof/authour1_u5ltaz.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>mr johnson</h5>
                    <p className='chef-position'>supervisor</p>
                  </div>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637225423/mama%20jollof/mem2_j31civ.jpg'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>lady jane</h5>
                    <p className='chef-position'>cook</p>
                  </div>
                  <div className='col-3 text-center'>
                    <div className='mr-chef'>
                      <img
                        src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637079215/mama%20jollof/graph_d6lfim.png'
                        class='d-block w-100'
                        alt='chef'
                      />
                    </div>
                    <h5 className='chef-name'>ben anderson</h5>
                    <p className='chef-position'>chef</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleControls'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default LandingPage
