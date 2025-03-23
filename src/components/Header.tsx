import clsx from "clsx";

interface HeaderProps {
  handleClick: (section: string) => void;
  activeSection: string;
}

const Header = (props: HeaderProps) => {
  const { handleClick, activeSection } = props;
  return (
    <header className="s-header">
      <div className="header-mobile">
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li className={clsx(activeSection === "intro" ? "" : "")}>
              <a onClick={() => handleClick("intro")} className="smoothscroll">
                Intro
              </a>
            </li>
            <li className={clsx(activeSection === "about" ? "" : "")}>
              <a onClick={() => handleClick("about")} className="smoothscroll">
                About
              </a>
            </li>
            <li className={clsx(activeSection === "works" ? "" : "")}>
              <a onClick={() => handleClick("works")} className="smoothscroll">
                Works
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
