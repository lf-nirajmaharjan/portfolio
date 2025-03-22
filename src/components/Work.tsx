const Work = () => {
  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio">
        <div className="column lg-12">
          <h2 className="text-pretitle">Recent Works</h2>
          <p className="h1">
            Here are some of my favorite projects I have done lately.
          </p>

          <ul className="folio-list block-stack-on-1000">
            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./krane__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Web Application</div>
                  <div className="folio-list__item-title">Krane</div>
                  <ul className="folio-list__item-tags">
                    <li>Next.js</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./nodal__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Web Application</div>
                  <div className="folio-list__item-title">NODAL</div>
                  <ul className="folio-list__item-tags">
                    <li>React</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./patient_velocity__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Web Application</div>
                  <div className="folio-list__item-title">Patient Velocity</div>
                  <ul className="folio-list__item-tags">
                    <li>React</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./regiebrun__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Website</div>
                  <div className="folio-list__item-title">Regiebrun</div>
                  <ul className="folio-list__item-tags">
                    <li>Wordpress</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./xtb__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Website</div>
                  <div className="folio-list__item-title">XTBS</div>
                  <ul className="folio-list__item-tags">
                    <li>Wordpress</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </a>
            </li>

            <li className="folio-list__item column">
              <a className="folio-list__item-link">
                <div className="folio-list__item-pic">
                  <img src="./ebpearls__thumbnail.jpg" alt="" />
                </div>

                <div className="folio-list__item-text">
                  <div className="folio-list__item-cat">Website</div>
                  <div className="folio-list__item-title">EB Pearls</div>
                  <ul className="folio-list__item-tags">
                    <li>Wordpress</li>
                    <li>SASS</li>
                    <li>Responsive</li>
                    <li>jQuery</li>
                  </ul>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
