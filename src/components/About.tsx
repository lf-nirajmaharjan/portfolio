import { EducationData, experienceData } from "../data";

const About = () => {
  return (
    <section id="about" className="s-about target-section">
      <div className="row about-info wide">
        <div className="column lg-7 md-12 mx-auto">
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
            <a
              href="/resume-Niraj.pdf"
              download="resume-Niraj.pdf"
              className="btn btn--medium u-fullwidth"
            >
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
            <li>Responsive Design</li>
            <li>Image Editing</li>
            <li>Product Design</li>
            <li>Prototyping</li>
          </ul>
        </div>
      </div>

      <div className="row about-timelines">
        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle">Experience</h2>

          {experienceData.map((item, index) => (
            <div className="timeline" key={index}>
              <div className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">{item.company}</h4>
                  <h5 className="timeline__meta">{item.designation}</h5>
                  <p className="timeline__timeframe">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="column lg-6 tab-12">
          <h2 className="text-pretitle">Education</h2>

          <div className="timeline">
            {EducationData.map((item, index) => (
              <div key={index} className="timeline__block">
                <div className="timeline__bullet"></div>
                <div className="timeline__header">
                  <h4 className="timeline__title">{item.degree}</h4>
                  <h5 className="timeline__meta">
                    {item.institution} | {item.location}
                  </h5>
                  <p className="timeline__timeframe">{item.passOutYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
