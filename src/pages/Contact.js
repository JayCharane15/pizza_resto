import { Label } from '@mui/icons-material'
import React from 'react'
import PizzaLeft from '../assests/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Name</label>
                <input name='name' placeholder='Enter your name' type="text"></input>

                <label htmlFor='email'>Email</label>
                <input name='name' placeholder='Enter your email' type="email"></input>

                <label htmlFor='msg'>Message</label>
                <textarea rows="6" placeholder="Enter your message" name="msg" required></textarea>
                <button type='submit'>Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default Contact