import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - Your Company</title>
        <meta name="description" content="Welcome to the homepage of SilicoWorks Lab." />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/" />
      </Helmet>
      <div className='home-title'>
        <h1>Finding Clarity Through the Fog of Uncertainty</h1>
      </div>
      {/* <h1 className="home-title">
        SilicoWorks
        <span>™</span>
      </h1> */}
    </div>
  )
}

export default Home
