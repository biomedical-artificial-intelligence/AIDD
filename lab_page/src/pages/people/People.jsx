import React from 'react'
import ArticleEmbed from './ArticleEmbed'
import './People.css'
import seo from '../../assets/images/seo.jpg'
import leejiyeon from '../../assets/images/leejiyeon.png'
import jiyoonchoi from '../../assets/images/CHOI_JIYOON.jpg'
import damishim from '../../assets/images/SHIM_DAMI.jpg'
import yunhuijo from '../../assets/images/JO_YUNHUI.jpg'
import hyeinjeong from '../../assets/images/JEONG_HYEIN.jpg'
import jisookim from '../../assets/images/jisookim.jpg'
import inhyeoksong from '../../assets/images/INHYEOK_SONG.jpg'
import geunhyebae from '../../assets/images/geunhyebae.jpg'
import sujinlee from '../../assets/images/sujinlee.jpg'

const People = () => {
  const articles = [
    {
      title:
        '성균관대학교 삼성융합의과학원 의료인공지능연구소, Healthcare AI Innovators Summit 개최',
      url: 'https://www.lecturernews.com/news/articleView.html?idxno=134986',
      date: '2023-09-04',
    },
    {
      title:
        '"현명한 선택과 결정의 알고리즘" 성균관대학교 의학과 서성욱 교수 『결정하는 마음』 출간',
      url: 'https://www.lecturernews.com/news/articleView.html?idxno=120172',
      date: '2023-03-02',
    },
    {
      title: '의사 대체한다고 난리였던 의료AI 잠잠해진 이유는?',
      url: 'https://www.doctorsnews.co.kr/news/articleView.html?idxno=147698',
      date: '2022-12-26',
    },
  ]

  return (
    <div className="total-container">
      <div className="page">
        <h1 className="page-title">People</h1>
      </div>
      <div className="main-container">
        <div className="people">
          <div className="principal-title">
            <h1>PRINCIPAL INVESTIGATOR</h1>
            <h1>Sung-Wook Seo, Professor</h1>
          </div>
          <div className="people-photo-contents">
            <img src={seo} className="principal-photo" />
            <div className="principal-contents">
              <div className="introduce-principal">
                Artificial Intelligence (AI) has emerged as a transformative
                force in drug discovery, revolutionizing the traditional drug
                development process and accelerating the identification and
                optimization of novel therapeutic compounds. SilicoWorks
                platform analyzes vast datasets, including genomic, proteomic,
                and chemical information, to predict drug-target interactions,
                assess pharmacokinetics, and optimize compound structures. The
                integration of AI and in silico technology in the platform
                streamlines the identification of lead compounds, significantly
                reducing the time and cost and making it feasible for smaller
                research labs to engage in meaningful drug development
                endeavors. Moreover, SilicoWorks continues to evolve to foster
                innovation and address unmet medical needs in drug discovery.
              </div>
              <div className="profile">
                <h3>Education</h3>
                <p>
                  2010.02 Doctor of Medicine, Graduated from School of Medicine,
                  Seoul National University
                </p>
                <p>
                  2003.06 Master of Medicine, Graduated from School of Medicine,
                  Seoul National University
                </p>
                <p>
                  1997.02 Bachelor of Medicine, Graduated from Seoul National
                  University
                </p>
              </div>
            </div>
          </div>
          <div className="principal-media">
            <div className="principal-video">
              <h3>TV & 동영상</h3>
              <div className="videos-container">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/3yTba8jyE9Q"
                    title="YouTube video"
                    className="profile-video"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/3vuxNnq7wlg"
                    title="YouTube video"
                    className="profile-video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="principal-news">
              <h3>언론기사</h3>
              <div className="news-item">
                <ArticleEmbed articles={articles} />
              </div>
            </div>
          </div>
        </div>

        <div className="people">
          <h1>COLLOBORATORS</h1>
          <div className="people-photo-contents">
            <img src={leejiyeon} className="people-photo" />
            <div className="people-contents">
              <div className="name-position">
                <h2>Ji-Yeon Lee, Professor</h2>
              </div>
              <div className="profile">
                <h3>Education</h3>
                <p>
                  2005.02 Doctor of Medicine in Internal Medicine, Graduated
                  from Sungkyunkwan University
                </p>
                <p>
                  2002.06 Master of Medicine, Graduated from Sungkyunkwan
                  University
                </p>
                <p>
                  1999.02 Bachelor of Medicine, Graduated from Ewha Womans
                  University
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="people">
          <h1>RESEARCHERS</h1>
          <div className="bio-lab">
            <h1>BIO LAB</h1>
            {/* 최지윤 */}
            <div className="people-photo-contents">
              <img src={jiyoonchoi} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Ji-Yoon Choi, Senior Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>2017 Graduated from Doctor of Science</p>
                </div>
              </div>
            </div>
            {/* 심다미 */}
            <div className="people-photo-contents">
              <img src={damishim} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Da-Mi Shim, Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>2014 Graduated with a Bachelor of Science degree</p>
                </div>
              </div>
            </div>
            {/* 조윤희 */}
            <div className="people-photo-contents">
              <img src={yunhuijo} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Yun-Hui Jo, CRC</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>2022 Graduated from the Bachelor of Health Sciences</p>
                </div>
              </div>
            </div>
            {/* 정혜인 */}
            <div className="people-photo-contents">
              <img src={hyeinjeong} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Hye-In Jeong, Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>2023 Graduated with a Bachelor of Science degree</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dev">
            <h1>DEV</h1>
            {/* 김지수 */}
            <div className="people-photo-contents">
              <img src={jisookim} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Ji-Soo Kim, Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>
                    2018.08 Graduated from Ajou University with Bachelor of
                    Science in Software
                  </p>
                </div>
              </div>
            </div>
            {/* 송인혁 */}
            <div className="people-photo-contents">
              <img src={inhyeoksong} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>In-Hyeok Song, Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>
                    2022.02 Master&apos;s Degree in Physics and Analytical
                    Chemistry, Graduated from Hannam University
                  </p>
                  <p>
                    2020.02 Graduated from Hannam University with
                    Bachelor&apos;s degree - Major: Chemistry, Minor: Big Data
                  </p>
                </div>
              </div>
            </div>
            {/* 배근혜 */}
            <div className="people-photo-contents">
              <img src={geunhyebae} className="people-photo" />
              <div className="people-contents">
                <div className="name-position">
                  <h2>Geun-Hye Bae, Researcher</h2>
                </div>
                <div className="profile">
                  <h3>Education</h3>
                  <p>
                    2021.02 Graduated from Kyungpook National University with
                    Bachelor of Science in Mathematics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="people">
          <h1>GRADUATE STUDNETS</h1>
          {/* 수진 */}
          <div className="people-photo-contents">
            <img src={sujinlee} className="people-photo" />
            <div className="people-contents">
              <div className="name-position">
                <h2>Su-Jin Lee</h2>
              </div>
              <div className="profile">
                <h3>Education</h3>
                <p>
                  2009 Graduated from Pusan National University with Bachelor of
                  Science in Nursing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
