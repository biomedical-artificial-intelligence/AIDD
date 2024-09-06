import React from 'react'
import { Helmet } from 'react-helmet-async'
import './SarcomaBiology.css'
import a from '../../../assets/images/research/sarcoma/a.png'
import b from '../../../assets/images/research/sarcoma/b.png'
import c from '../../../assets/images/research/sarcoma/c.png'
import d from '../../../assets/images/research/sarcoma/d.png'
import e from '../../../assets/images/research/sarcoma/e.png'
import f from '../../../assets/images/research/sarcoma/f.png'
import g from '../../../assets/images/research/sarcoma/g.png'
import h from '../../../assets/images/research/sarcoma/h.png'


const SarcomaBiology = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Sarcoma Biology</title>
        <meta name="description" content="Sarcoma Biology information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD-dev/research/sarcoma-biology" />
      </Helmet>

      <h1 className="page-title">Research</h1>
      <div className="main-container">
        <h1 className="main-title">Sarcoma Biology</h1>
        <div className="research-container">
          <div className="research-title">
            <h1>Competency of Our Lab for Oncogenic Mechanism Analysis</h1>
          </div>
          <div className="research-contents">
            DATA collection :
            Our patient managers collect highly qualified samples and DATA including QC evaluation and clinical information in compliance with the relevant regulations. They also survey patients’ outcomes including functional, mental, and pain scores, and long term prognosis such as progression free survival and overall survival outcomes.
            <br />
            <br />
            DATA analysis : Our data analyst, an expert in statistics and machine learning, analyzes the collected data to identify target genes or fusion genes.
            The following data analyses are outsourced to external institutes.
            : Fusion gene prediction using three different algorithm, GWAS, Synthetic lethality analysis
            <br />
            <br />
            In vitro study :
            DNA recombination, gain of function test, loss of function test, angiogenesis, EMT evaluation, MSC differentiation, anchorage independent growth, migration/invasion, kinase activity analysis,  apoptosis assay, drug synergy analysis, ADCC, PCR/Western/ELISA test
            The following experiments are outsourced to external company.
            : NGS, Peptide production, small molecule production, Ab production, chimeric protein production
            <br />
            <br />
            In vivo study :
            Osteosarcoma Model, Bone Metastasis Model, CAR-T cell Model, Luciferase expressing cancers, Osteolysis mouse model, Inflammatory Arthritis Model, Functional Test (Rotarod test)
            The following experiments are outsourced to external company.
            : Pharmacodynamic study using Rat, Transgenic Mouse
            <br />
            <br />
            In our laboratory, we perform whole RNA sequencing on both cancerous and normal tissues from patients. Using the obtained information on gene mutations or fusion genes, we identify potential targets. These identified targets are then validated for their oncogenic potential through in vivo or in vitro experiments, following a well-established pipeline.
            <br />
            <img src={a} className="sarcoma-photo" alt='Bed Side to Target Discovery' />
            <br />
            Fusion genes are filtered using three different algorithms. Then, they are validated using PCR or Sanger&apos;s method. Our own algorithms for causal identification clarify causal genes, aiding our decision-making for specific treatments. The graph below shows the probability of effectiveness of radiation therapy for specific gene mutations.
            <br />
            <img src={b} className="sarcoma-photo" alt='Fusion Gene Filtering' />
            <br />
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Identified Mechanism of Target Gene and Therapeutic Potential</h1>
          </div>
          <div className="research-contents">
            <img src={c} className="sarcoma-photo" alt='Identified Mechanism of Target Gene and Therapeutic Potential' />
            <br />
            <h4>TP53 mutation | Synergistic effect (NAC + DOX)</h4>
            {/* <br /> */}
            {/* <br /> */}
            We elucidated synergistic effect of NAC and DOX in cancers with TP53 Mutation using PDC (Patient-derived Cell).
            <br />
            <img src={d} className="sarcoma-photo" alt="Tumour Biol" />
            <br />
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1></h1>
          </div>
          <div className="research-contents">
            <h4>EIF3b silencing | Induce TNFRSF21, promote cancer specific apoptosis</h4>
            {/* <br /> */}
            <img src={e} className="sarcoma-photo" alt="EIF3b silencing" />
            <br />
            eIF3b silencing decreased cell viability and induced apoptosis in U2OS cells, and by using gene profiling we discovered that eIF3b silencing also resulted in the upregulation of tumor necrosis factor receptor superfamily member 21 (TNFRSF21). We found that TNFRSF21 overexpression induced cell death in U2OS cells, and we confirmed that eIF3b silencing completely suppressed cell growth in multiple osteosarcoma cell lines. However, eIF3b silencing failed to suppress cell growth completely in normal fibroblast cells.
            <br />
            &lt; Bone Joint Res. 2017 Mar;6(3):186-193. &gt;
            <br />
            <br />
            → We are screening small molecules that bind to the active binding pocket of eIF3b using Schrodinger system.
            <br />
            <br />
          </div>
        </div>
        <div className="research-container">
          <div className="research-contents">
            <h4>PTCH1 activation | Osteolytic Bone Metastasis</h4>
            {/* <br /> */}
            <img src={f} className="sarcoma-photo" alt="PTCH1 activation | Osteolytic Bone Metastasis" />
            <br />
            <h4>Relation between PTCH1 and osteolytic bone metastasis.</h4>
            Binding of a HH ligand to the PTCH1 prevents PTCH1-mediated suppression of the SMO, leading to activation of the GLI 1 and the regulation of target genes. When PTCH1 is activated, SOX2 and MMP7 increase. (1) SOX2 act at multiple stages that include promoting anchorage-independent growth, metastatic colonization and invasion. (2) MMP7 promotes invasion and cause the release soluble-RANKL. (3) The membrane-bound RANKL produces by the osteoblast. The increase in the soluble-RANKL form by MMP7 induces mature osteoclasts when bound to the RANK of the osteoclast precursor. Activated osteoclasts increases osteolytic bone metastasis. PTCH1, Patched 1; HH, Hedgehog; SMO, Smoothened; GLI 1, glioma-associated oncogene homologue 1; SOX2, SRY (sex-determining region Y)-box 2; MMP7, matrix metalloproteinase 7; RANKL, receptor activator of nuclear factor kappa B ligand.
            <br />
            &lt; Bone. 2021 Mar:144: &gt;
          </div>
        </div>
        <div className="research-container">
          <div className="research-contents">
            <h4>GNAQ mutation | Activate EMT, Metastasis</h4>
            {/* <br /> */}
            <img src={g} className="sarcoma-photo" alt="GNAQ mutation | Activate EMT, Metastasis" />
            <br />
            Comparative gene analysis revealed that the GNAQ was more frequently altered in metastatic bone lesions than in primary tumour sites in lung cancer patients.   GNAQ-knockdown showed down-regulation of tumour growth through mitogen-activated protein kinase (MAPK) signalling in lung cancer cells, but not increased apoptosis. We found that GNAQ-knockdown induced EMT and promoted invasiveness. GNAQ-knockdown cells injected into the bone marrow of murine tibia induced tumour growth and bone-to-lung metastasis, whereas it did not in control mice. The knockdown of GNAQ enhanced cancer stem cell-like properties in lung cancer cells, which resulted in the development of resistance to chemotherapy.
            <br />
            &lt; Bone Joint Res. 2021 May; 10(5): 310–320. &gt;
          </div>
        </div>
        <div className="research-container">
          <div className="research-contents">
            <h4>MFSD7-ATP5i fusion | Migration and Invasion through GSK-3 pathway</h4>
            We discovered a novel major facilitator superfamily domain-containing 7 (MFSD7) and adenosine triphosphate 5I (ATP5I) gene fusion from sarcomas. The MFSD7-ATP5I fusion transcript was detected in 58% of sarcoma samples (N=55). MFSD7-ATP5I expression is associated with marked pleomorphism and lower tumor necrosis. Cell migration and invasion was significantly reduced by knock-down of MFSD7-ATP5I. Cell migration and invasion was increased by overexpression of MFSD7-ATP5I. A phosphokinase assay demonstrated that MFSD7-ATP5I is involved in the GSK-3 pathway.
            <br />
            &lt; J Orthop Res. 2024 Feb;42(2):443-452 &gt;
            <img src={h} className="sarcoma-photo" alt="MFSD7-ATP5i fusion | Migration and Invasion through GSK-3 pathway" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SarcomaBiology