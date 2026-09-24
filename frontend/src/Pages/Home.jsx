import React from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Book from '../components/Book.jsx'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Book />
    </div>
  )
}

export default Home
