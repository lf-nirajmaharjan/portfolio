import React from "react";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row about-info wide">
        <div className="column lg-6 md-12 about-info__pic-block">
          <img
            src="images/about-photo.jpg"
            srcSet="images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x"
            alt=""
            className="about-info__pic"
          />
        </div>

        <div className="column lg-6 md-12">
          <div className="about-info__text">
            <h2 className="text-pretitle with-line">About</h2>
            <p className="attention-getter">
              Innovative front-end developer with 8+ years of experience in
              building and maintaining responsive web applications. Proficient
              in HTML, CSS, SASS, JavaScript, and modern libraries/frameworks
              such as React.js and Next.js. Skilled in designing user-friendly
              interfaces, optimizing performance, and working closely with
              cross-functional teams to deliver high-quality projects.
            </p>
            <a href="#0" className="btn btn--medium u-fullwidth">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="row about-expertise">
        <div className="column lg-12">
          <h2 className="text-pretitle">Expertise</h2>

          <ul className="skills-list h1">
            <li>UI/UX Design</li>
            <li>Resposnive Design</li>
            <li>Image Editing</li>
            <li>Product Design</li>
            <li>Prototyping</li>
          </ul>
        </div>
      </div>

      <div className="row about-timelines">
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle">Experience</h2>

          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Leapfrog Technology</h4>
                <h5 className="timeline__meta">Software Engineer</h5>
                <p className="timeline__timeframe">February 2022 - Present</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">DigitalFlow Studio</h4>
                <h5 className="timeline__meta">Sr. Frontend Developer</h5>
                <p className="timeline__timeframe">June 2018 - August 2021</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">EB Pearls</h4>
                <h5 className="timeline__meta">Sr. Frontend Developer</h5>
                <p className="timeline__timeframe">June 2015 - August 2018</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">3Hammers Technology</h4>
                <h5 className="timeline__meta">Sr. Frontend Developer</h5>
                <p className="timeline__timeframe">June 2015 - August 2018</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">WorxPro Pvt. Ltd. </h4>
                <h5 className="timeline__meta">Jr. Frontend Developer</h5>
                <p className="timeline__timeframe">June 2015 - August 2018</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle">Education</h2>

          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">BBA</h4>
                <h5 className="timeline__meta">KIST college | Kamalpokhari</h5>
                <p className="timeline__timeframe">2008</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Intermediate (+2)</h4>
                <h5 className="timeline__meta">KMC College | Bagbazar</h5>
                <p className="timeline__timeframe">2006</p>
              </div>
            </div>

            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">School</h4>
                <h5 className="timeline__meta">
                  Swornim Shikshya Sadan | Bhurungkel
                </h5>
                <p className="timeline__timeframe">2004</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
