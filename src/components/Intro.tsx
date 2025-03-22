const Intro = () => {
  return (
    <>
      <section id="intro" className="s-intro target-section">
        <div className="row intro-content wide">
          <div className="column">
            <div className="text-pretitle with-line">Hello</div>
            <h1 className="text-huge-title">
              I am Niraj Maharjan, <br />
              a web designer <br />
              & frontend <br />
              developer
            </h1>
          </div>
        </div>

        <a href="#about" className="intro-scrolldown smoothscroll">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
          </svg>
        </a>
      </section>
    </>
  );
};

export default Intro;
