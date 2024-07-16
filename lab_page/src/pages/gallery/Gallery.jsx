import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Gallery.css'
// import jisookim from '../assets/images/jisookim.jpg'
// import inhyeoksong from '../assets/images/INHYEOK_SONG.jpg'
// import geunhyebae from '../assets/images/geunhyebae.jpg'

const Gallery = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Gallery - SilicoWorks Lab</title>
        <meta name="description" content="Gallery for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/gallery" />
      </Helmet>
      <div className="page">
        <h1 className="page-title">Gallery</h1>
      </div>
      <div className="main-container">
        <div className="pictures col-md-12">
          {/* <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" />
          <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" />
          <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" />
          <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" />
          <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" />
          <img src={jisookim} className="photo" />
          <img src={inhyeoksong} className="photo" />
          <img src={geunhyebae} className="photo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery
