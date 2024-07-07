import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Research.css'

const Research = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Research - SilicoWorks Lab</title>
        <meta name="description" content="Research information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD/research" />
      </Helmet>
      <h1 className="page-title">Research</h1>
      <div className="main-container">
        <h1 className="main-title">Our Research Interest</h1>
        <div className="research-container">
          <div className="research-title">
            <h1>Causal Inference</h1>
          </div>
          <div className="research-contents">
            Causal Inference is pivotal in understanding the true impact of
            actions or events in data-driven systems. They go beyond correlation
            to uncover meaningful relationships, identifying which variables
            directly influence outcomes and how. By distinguishing causation
            from mere association, Causal Inference empowers decision-makers to
            make informed choices and predict outcomes accurately, crucial in
            fields ranging from healthcare to economics.
            <br />
            <br />
            Our lab is focused on advancing causal inference algorithms to
            understand the effectiveness of personalized treatments.
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Sarcoma Biology</h1>
          </div>
          <div className="research-contents">
            Sarcoma is a rare type of cancer that can appear anywhere in the
            body. Although it is known that there are few common mutations in
            sarcoma, our analysis showed that there were many tumor-specific
            fusion transcripts due to chromosomal rearrangements and expression
            of transcription-inducing chimeras. These gene fusions are
            considered important factors in disease progression and poor
            prognosis. Our laboratory analyzes sarcoma-specific fusion genes to
            discover new biomarkers that can be used for diagnosis. We also
            conduct research on patient-tailored treatments such as antibodies
            and CARs.
            <br />
            <br />
            Our lab is focused on analyzing sarcoma-specific fusion genes to
            discover new biomarkers for diagnosis and developing
            patient-tailored treatments such as antibodies and CARs.
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Targeting TLRs in Drug Development</h1>
          </div>
          <div className="research-contents">
            Toll-like receptors (TLRs) are crucial proteins in the immune
            system, recognizing pathogens and triggering immune responses. Drug
            development targeting TLRs involves stages such as discovery,
            preclinical research, and clinical trials, aiming to modulate immune
            pathways. TLR-targeted therapies, like TLR4 antagonists and TLR7/9
            agonists, show promise in treating diseases like sepsis, chronic
            inflammation, cancer, and viral infections. This approach highlights
            the potential of personalized medicine and immunotherapy, offering
            new hope for effective treatments with fewer side effects. As
            understanding of TLR biology deepens, these therapies are poised to
            transform modern medicine.
            <br />
            <br />
            Our lab is focused on developing TLR-targeted therapies, such as
            TLR4 antagonists and TLR7/9 agonists, to treat diseases like sepsis,
            chronic inflammation, cancer, and viral infections.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research
