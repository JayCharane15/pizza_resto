import React from 'react'
import multiplePizzas from '../assests/multiplePizzas.jpeg'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${multiplePizzas})` }}></div>
        <div className='aboutBottom'> 
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat illum commodi eveniet sequi iusto, voluptas ab cum dolore quas, assumenda officia saepe voluptatibus maiores excepturi facere atque dolorum dicta! Est, minima sit in odit quasi sunt nulla eveniet optio quia nesciunt quod iste voluptate earum asperiores, tempora impedit, quae recusandae? Deserunt tempora facilis debitis, laudantium vitae odio iste sapiente veniam odit incidunt cum, impedit repudiandae delectus recusandae voluptatem et a excepturi consectetur optio fugiat expedita quibusdam. Debitis possimus aliquam saepe ducimus fugiat magni ea mollitia dolore, similique at error facere amet unde nulla distinctio iure maiores officia quod nesciunt consectetur?</p>
        </div>

    </div>
    
  )
}

export default About