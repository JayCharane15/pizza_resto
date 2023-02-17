import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import Banner from '../assests/pizza3.jpeg'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='headerContainer'>
          <h1>Jay's Pizzeria</h1>
          <p>Best Pizza's of Kolhapur</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
    </div>
  )
}

export default Home