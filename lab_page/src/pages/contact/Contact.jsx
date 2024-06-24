import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="total-container">
      <div className="page">
        <h1 className="page-title">Contact</h1>
      </div>
      <div className="main-container">
        <div className="contents-container">
          <div className="office-box">
            <h1>PROF. SEO&apos;S OFFICE</h1>
          </div>
          <div className="address-box">
            <p> 8P-9, 81, Irwon-ro, Gangnam-gu, Seoul, Republic of Korea</p>
            <p>서울 강남구 일원로 81 삼성의료원 암병원 8P-9</p>
          </div>
          {/* <div className="zipcode">
            <h3>zip code</h3>
            <p>06351</p>
          </div> */}
          <div className="email-box">
            <p>sungwseo@gmail.com</p>
          </div>
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8162685771517!2d127.08340767572068!3d37.48866187205886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5d206e5b86b%3A0xdc3cc4002a51239f!2z7IK87ISx7ISc7Jq467OR7JuQIOyVlOuzkeybkA!5e0!3m2!1sko!2skr!4v1718253713036!5m2!1sko!2skr"
              width="60%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
