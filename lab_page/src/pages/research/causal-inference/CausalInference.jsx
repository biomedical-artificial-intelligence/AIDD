import React from 'react'
import { Helmet } from 'react-helmet-async'
import './CausalInference.css'
import a from '../../../assets/images/research/a.png'
import b from '../../../assets/images/research/b.png'
import c from '../../../assets/images/research/c.png'
import d from '../../../assets/images/research/d.png'
import e from '../../../assets/images/research/e.png'
import f from '../../../assets/images/research/f.png'
import g from '../../../assets/images/research/g.png'

const CausalInference = () => {
  return (
    <div className="total-container">
      <Helmet>
        <title>Causal Inference</title>
        <meta name="description" content="Causal Inference information for SilicoWorks Lab" />
        <link rel="canonical" href="https://biomedical-artificial-intelligence.github.io/AIDD/research/causal-inference" />
      </Helmet>

      <h1 className="page-title">Research</h1>
      <div className="main-container">
        <h1 className="main-title">Our Research Interest</h1>
        <div className="research-container">
          <div className="research-title">
            <h1>Win probability for survival data analysis</h1>
          </div>
          <div className="research-contents">
            Survival Win Probability (SWP)
            <br />
            <br />
            In medical data analysis, we often encounter survival data, which cannot be analyzed with supervised machine learning, because the target value includes time, event, and censored.
            Survival Win Probability (SWP) is a chance for a subject to live longer than the others. SWP can be estimated by comparing the survival value (time and event) between a subject and the others.
            This novel concept can be easily applied to various supervised machine learning models. Using this concept, we could develop Bayesian survival model and survival reinforcement learning model.
            <img src={a} className="causal-photo" alt='Survival Win Probability' />
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Counterfactual search algorithm (C_search)</h1>
          </div>
          <div className="research-contents">
            We developed C-search algorithm that generated individual causal effect by comparing the effect of an individual subject with a similar individual randomly sampled form DB.
            The similar individual is defined as a pseudo-counterfactual that need to be modified to satisfy exchangeability between the factual and counterfactual subject.
            We defined similarity score between the factual and pseudo-counterfactual as a measure of exchangeability and applied this to the learning rate in machine learning algorithm.
            <img src={b} className="causal-photo" alt='Counterfactual search algorithm' />
            We can apply this concept to any kind of machine learning controlling the reliability of individual causal effect (ICE).
            For example, we use dynamic learning rate according to the reliability.
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>Causal Gene Discovery</h1>
          </div>
          <div className="research-contents">
            C-search based Bayesian system was compared with the conventional log-rank survival analysis.
            As the number of data increases, both algorithms show better causal gene discovery.
            The C-search algorithm continuously improved its discovery performance until 1500 samples were obtained and then plateaued.
            Conventional statistics showed a linear improvement according to the number of samples.
            It required at least 4000 samples to show performance comparable to that of the C-search algorithm.
            <img src={c} className="causal-photo" alt='Causal Gene Discovery' />
            The number of causal genes discovered by C-search and conventional statistics.
            The X-axis is the number of samples consisting of the simulation data.
            The Y-axis is the number of true causal genes among the 10 suggested causal genes that the algorithm discovered.
            The C-search algorithm shows the discovery rate rapidly increasing until the 1500 data instances.
            The log-rank test shows a slower increase in performance.
            Nine Genes were discovered as a positive modulator to improve chemotherapeutic effect in breast cancer.
            <img src={d} className="causal-photo" alt='Nine Genes' />
            <img src={e} className="causal-photo" alt='Nine Genes' />
            Discovery of positive modulator genes by C-search in the cBioPortal breast cancer dataset.
            Nine causal genes are discovered, and patients with causal genes are assigned to the causal gene group.
            Patients without casual genes are assigned to the other gene group.
          </div>
        </div>
        <div className="research-container">
          <div className="research-title">
            <h1>The C-search improves offline RL</h1>
          </div>
          <div className="research-contents">
            We developed counterfactual search algorithm (C-search) which bridge the gap between causal inference and the RL method using a modified reward.
            C-search infers the individual causal effect from the offline data and feed it to the RL as a reward.
            C-search methods significantly improve the performance and the robustness of offline RL in some challenge situations simulated by artificial data.
            <img src={f} className="causal-photo" alt='The C-search improves offline RL' />
            DQN with C-search algorithm C-search receives action (T = α) from the RL model and returns a causal reward (RICE) that is inferred from the offline data.
            The pseudo-causal effect ∆Yi (X, X ′ ) is an outcome difference between the individ- ual X and pseudo-counterfactual X′ that is sampled from the offline data pool (T ̸= α).
            The causal reward is a weighted av- erage rewards of pseudo-causal effect.
            The weight W (X |X ′ ) is estimated according to the similarity between X and X′.
            DQN agent receive the causal reward (RI C E ) from C-search. The agent updates parameter θ as it learns RICE for T = α on X.
            The target Q-network copies the updated parameter θ after training the Q-network with a certain number of training data.
            <img src={g} className="causal-photo" alt='DQN' />
            We incorporated C-search algorithm to DQN for CartPole balancing problem, which is one of the simplest task to compare the performance of the offline RLs.
            The performance between simple DQN and C-search DQN were compared using evaluation by online policy selection.
            The performance of C-search DQN is closed to that of online DQN.
            However, conventional DQN performs poorly.

          </div>
        </div>
      </div>

    </div>
  )
}

export default CausalInference