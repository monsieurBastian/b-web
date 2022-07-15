import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title is-4 is-strong">Bastian</h1>
        </Link>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavigation" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <Link className="navbar-item" to="#">Blog</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="#">
                <strong>Get in touch!</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;