import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className='text-center p-4 p-sm-3 bg-dark'>
        <h2>
          <span className='mama'>mama</span>
          <span className='jollof'>Jollof</span>
        </h2>
        <div className='underline mb-5'></div>
        <p className='story-tittle'>
          copyright &copy; <span>{new Date().getFullYear()}</span> Made for Mama
          jollo restaurant inc
        </p>
        <h5 className=''>develope by Nzedigwe Fabian Ikem</h5>
      </section>
    </div>
  )
}

export default Footer
