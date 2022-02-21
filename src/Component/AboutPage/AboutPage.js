import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <section className='about-us row m-2 m-sm-5 pb-4 pb-sm-5 align-items-center'>
        <div className='about-text-wrapper col-sm-6 mb-4 mb-sm-0'>
          <h2>I'm baby coloring book poke taxidermy</h2>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <button className='btn btn-outline-primary disabled'>Contact</button>
        </div>

        <div className='about-us-img-wrapper col-sm-6'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1637078044/mama%20jollof/1-07640.jpg_pncxak.jpg'
            alt='food'
          />
        </div>
      </section>

      <section className='text-center p-4 p-sm-5 bg-white'>
        <h2>Amazing story all the way</h2>
        <div className='underline mb-5'></div>
        <p className='story-tittle'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quia laudantium totam. Fugiat nemo, tempora ratione praesentium facere
          quas inventore totam odit commodi delectus dolore harum porro
          molestias soluta sed provident consectetur omnis sequi? Quasi.
        </p>
      </section>

      {/* cooking hours */}
      <section className='cooking-hour row pt-4'>
        <div className='cooking-h-item-1 text-center col-sm-3'>
          <h2 className='cooking-time'>12</h2>
          <h5>years of experience</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque.
          </p>
        </div>
        <div className='cooking-h-item-1 text-center col-sm-3'>
          <h2 className='cooking-time'>2900</h2>
          <h5>hours of cooking</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque.
          </p>
        </div>
        <div className='cooking-h-item-1 text-center col-sm-3'>
          <h2 className='cooking-time'>6000</h2>
          <h5>happy clients</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque.
          </p>
        </div>
        <div className='cooking-h-item-1 text-center col-sm-3'>
          <h2 className='cooking-time'>16</h2>
          <h5>skilled chefs</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
