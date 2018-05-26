import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio Site</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br />
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink><br />
    <NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink><br />
  </header>
);

export default Header;
