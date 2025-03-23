import { useState } from "react";
import { PortfolioData } from "../data";
import { motion } from "framer-motion";

const Work = () => {
  const [showPreview, setShowPreview] = useState({ active: false, index: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },

    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  return (
    <section id="works" className="s-works target-section">
      <div className="row works-portfolio">
        <div className="column lg-12">
          <h2 className="text-pretitle">Recent Works</h2>
          <p className="h1">
            Here are some of my favorite projects I have done lately.
          </p>

          <ul className="folio-list block-stack-on-1000">
            {PortfolioData.map((item, index) => (
              <li
                key={index}
                className="folio-list__item column"
                onMouseEnter={() => {
                  setShowPreview({ active: true, index });
                }}
                onMouseLeave={() => {
                  setShowPreview({ active: false, index: 0 });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCursorPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
              >
                <a className="folio-list__item-link">
                  <div className="folio-list__item-pic">
                    <img src={item.imageThumbnail} alt="" />
                  </div>

                  {showPreview && showPreview.index === index && (
                    <motion.div
                      className="folio-list__item-pic--full"
                      variants={scaleAnimation}
                      initial="initial"
                      animate={showPreview.active ? "enter" : "closed"}
                      // style={{ top: index * -100 + "%" } }
                      style={{
                        position: "absolute",
                        top: cursorPos.y,
                        left: cursorPos.x,
                        pointerEvents: "none",
                      }}
                    >
                      <img src={item.imageFull} alt="" />
                    </motion.div>
                  )}

                  <div className="folio-list__item-text">
                    <div className="folio-list__item-cat">
                      {item.ProjectType}
                    </div>
                    <div className="folio-list__item-title">
                      {item.projectName}
                    </div>
                    <ul className="folio-list__item-tags">
                      {item.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
