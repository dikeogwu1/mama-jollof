import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h1>error page</h1>
      <p>sorry this page could not be found</p>
      <Link to='/'>
        <button className='btn-back-home'>Head back home</button>
      </Link>
    </div>
  )
}

export default Error
