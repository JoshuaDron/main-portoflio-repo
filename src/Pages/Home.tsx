import React from 'react'
import Navbar from '../components/Navbar'
const portrait = require('../img/portrait.png');

const Home = () => {
    return (
        <div className="container">
            <h1 className='hello'>HELLO</h1>
            <img alt='portrait of Josh' className="portrait" src={String(portrait)} />
        </div>
    )
}

export default Home

