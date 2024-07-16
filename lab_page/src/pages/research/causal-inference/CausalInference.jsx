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
        <div className='research-container'>
          <table className='ci-table'>
            <tbody>
              <tr>
                <td>1</td>
                <td>국내</td>
                <td>인공신경망을 이용한 위암의 예후 예측 방법, 장치 및 프로그램</td>
                <td>10-2019-7003924</td>
                <td>10-2190299</td>
              </tr>
              <tr>
                <td>2</td>
                <td>국내</td>
                <td>생존율 예측 모델 생성 방법, 장치 및 컴퓨터 프로그램</td>
                <td>10-2017-0017642</td>
                <td>10-2127449</td>
              </tr>
              <tr>
                <td>3</td>
                <td>국내</td>
                <td>인공신경망을 이용한 활액막 육종의 예후 예측 방법, 장치 및 프로그램</td>
                <td>10-2017-0033206</td>
                <td>10-2172374</td>
              </tr>
              <tr>
                <td>4</td>
                <td>국내</td>
                <td>기계학습을 이용한 난소암의 예후 예측 방법, 장치 및 프로그램</td>
                <td>10-2017-0091056</td>
                <td>10-2061800</td>
              </tr>
              <tr>
                <td>5</td>
                <td>국내</td>
                <td>기록된 데이터에서 인과성을 식별하는 강화학습 방법, 장치 및 프로그램</td>
                <td>10-2020-0020549</td>
                <td>10-2440817</td>
              </tr>
              <tr>
                <td>10</td>
                <td>국내</td>
                <td>대퇴골 x-레이 영상을 이용한 학습 모델 기반의 종양 분류 방법 및 분석장치</td>
                <td>10-2022-0035243</td>
                <td></td>
              </tr>
              <tr>
                <td>11</td>
                <td>국내</td>
                <td>인과추론기반 효율적 임상시험 대상자 모집 강화학습 모델 트레이닝 방법 및 장치</td>
                <td>10-2023-0162089</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='research-container'>
          <p>
            1. Park, C. W., Seo, S. W., Kang, N., Ko, B., Choi, B. W., Park, C. M., ... & Yoon, H. J. (2020). Artificial intelligence in health care: current applications and issues. Journal of Korean medical science, 35(42).
          </p>
          <p>
            2. Ryu, S. M., Seo, S. W., & Lee, S. H. (2020). Novel prognostication of patients with spinal and pelvic chondrosarcoma using deep survival neural networks. BMC medical informatics and decision making, 20, 1-10.
          </p>
          <p>
            3. Paik, E. S., Lee, J. W., Park, J. Y., Kim, J. H., Kim, M., Kim, T. J., ... & Seo, S. W. (2019). Prediction of survival outcomes in patients with epithelial ovarian cancer using machine learning methods. Journal of gynecologic oncology, 30(4).
          </p>
          <p>
            4. Kim, J., Hong, J. Y., Kim, S. T., Park, S. H., Jekal, S. Y., Choi, J. S., ... & Lee, J. (2020). Clinical scoring system for the prediction of survival of patients with advanced gastric cancer. ESMO open, 5(2), e000670.
          </p>
          <p>5. Seo, S. W., Kim, J., Son, J., & Lim, S. (2020). Evaluation of conditional treatment effects of adjuvant treatments on patients with synovial sarcoma using Bayesian subgroup analysis. BMC Medical Informatics and Decision Making, 20, 1-12.</p>
          <p>6. Han, I., Kim, J. H., Park, H., Kim, H. S., & Seo, S. W. (2018). Deep learning approach for survival prediction for patients with synovial sarcoma. Tumor Biology, 40(9), 1010428318799264.</p>
          <p>7. Oh, S. E., Seo, S. W., Choi, M. G., Sohn, T. S., Bae, J. M., & Kim, S. (2018). Prediction of overall survival and novel classification of patients with gastric cancer using the survival recurrent network. Annals of surgical oncology, 25, 1153-1159.</p>
          <p>8. Lee, J., An, J. Y., Choi, M. G., Park, S. H., Kim, S. T., Lee, J. H., ... & Seo, S. W. (2018). Deep learning–based survival analysis identified associations between molecular subtype and optimal adjuvant treatment of patients with gastric cancer. JCO clinical cancer informatics, 2, 1-14.</p>

        </div>

      </div>

    </div>
  )
}

export default CausalInference