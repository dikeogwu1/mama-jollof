import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import all pages
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Single from './pages/Single'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* landing page */}
          <Route exact path='/' element={<Home />} />

          {/* about page */}
          <Route path='/about' element={<About />} />

          {/* recipe page */}
          <Route path='/recipe' element={<Recipe />} />

          {/* contact page */}
          <Route path='/contact' element={<Contact />} />

          {/* single meal page */}
          <Route path='/single/:id' element={<Single />} />

          {/* error page */}
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
