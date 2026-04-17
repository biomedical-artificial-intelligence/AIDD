import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - SilicoWorks Lab</title>
        <meta name="description" content="Welcome to the homepage of SilicoWorks Lab." />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD/" />
      </Helmet>

      <section className="hero-section">
        <span className="hero-eyebrow">SilicoWorks Lab</span>
        <h1 className="hero-title">
          Finding Clarity Through the Fog of Uncertainty
        </h1>
        <p className="hero-subtitle">
          Biomedical AI research for drug discovery and molecular design.
          Advancing causal inference, sarcoma biology, and TLR-targeted therapies.
        </p>
        <div className="hero-buttons">
          <Link to="/research" className="btn btn-primary">Explore Research</Link>
          <Link to="/people" className="btn btn-secondary">Meet the Team</Link>
        </div>
      </section>

      <section className="feature-section">
        <h2 className="feature-section-title">Research Interests</h2>
        <div className="feature-grid">
          <Link to="/research/causal-inference" className="feature-card">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></svg>
            </div>
            <h3>Causal Inference</h3>
            <p>Uncovering true effects of personalized treatments beyond correlation.</p>
          </Link>

          <Link to="/research/sarcoma-biology" className="feature-card">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>
            </div>
            <h3>Sarcoma Biology</h3>
            <p>Fusion-gene biomarkers and CAR/antibody development for rare sarcomas.</p>
          </Link>

          <Link to="/research" className="feature-card">
            <div className="feature-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>
            </div>
            <h3>Targeting TLRs</h3>
            <p>Modulating immune pathways for sepsis, cancer, and viral infections.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
