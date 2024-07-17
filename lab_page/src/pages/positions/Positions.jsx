import React from 'react'
import { Helmet } from 'react-helmet-async';
import './Positions.css'

const Positions = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Positions - SilicoWorks Lab</title>
        <meta name="description" content="Position information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/positions" />
      </Helmet>
      <div className="page">
        <h1 className="page-title">Positions</h1>
      </div>
      <div className="main-container">
        <div className="podoc">
          <h1 className="main-title">
              Postdoctoral Research Fellow Position in AI-Driven Protein
              Structure Analysis
          </h1>
          <div className="positions-contents">
            <h3>Institution: </h3>
            Samsung Medical Center, Sungkyunkwan University of Medicine
            <h3>Location: </h3>Seoul, Korea
            <h3>Position Type: </h3>
            Postdoctoral Research Fellow
            <h3>Position Overview: </h3>
            We are seeking a highly motivated and talented Postdoctoral Research
            Fellow to join our research team focused on AI-driven protein
            structure analysis. The successful candidate will have a strong
            background in computational biology, bioinformatics, and artificial
            intelligence, particularly as applied to protein structure
            prediction and analysis.
            <h3>Key Responsibilities:</h3>
            - Develop and apply AI models for predicting and analyzing protein
            structures.
            <br />
            - Collaborate with interdisciplinary teams of biologists, chemists,
            and computer scientists.
            <br />
            - Publish research findings in high-impact journals and present at
            international conferences.
            <br />- Mentor graduate and undergraduate students.
            <br />- Contribute to grant writing and proposal development.
            <h3>Qualifications: </h3>
            - Ph.D. in Computational Biology, Bioinformatics, Computer Science,
            or a related field.
            <br />- Strong expertise in machine learning and artificial
            intelligence methods.
            <br />- Experience with protein structure prediction tools and
            databases.
            <br />- Proficiency in programming languages such as Python, R, or
            similar.
            <br />- Excellent communication skills and the ability to work
            collaboratively.
            <br />- A strong publication record in relevant scientific journals.
            <h3>Preferred Qualifications: </h3>
            - Experience with deep learning frameworks (e.g., TensorFlow,
            PyTorch).
            <br />- Knowledge of structural bioinformatics and molecular
            dynamics simulations.
            <br />- Experience with high-performance computing environments.
            <h3>Application Instructions: </h3>
            To apply, please submit the following documents to us :
            <p>
              - A cover letter outlining your research interests and career
              goals.
              <br />- A detailed curriculum vitae (CV).
              <br />- Contact information for three professional references.
              <br />- Copies of up to three relevant publications.
            </p>
            <h3>Contact Information: </h3>
            For inquiries about the position, please contact:
            <br />
            Sung Wook Seo M.D. Ph.D.
          </div>
        </div>

        {/* <div className="graduate">
          <div className="positions-title">
            <h1>Graduate Students Position</h1>
          </div>
        </div> */}

        <div className="positions-email">
          <h1>sungwseo@gmail.com</h1>
        </div>
      </div>
    </div>
  )
}

export default Positions
