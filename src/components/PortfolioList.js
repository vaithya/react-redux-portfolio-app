import React from 'react';

import { Link } from 'react-router-dom';

const PortfolioList = () => (
  <div>
    <h1>My work</h1>
    <p>Check out the things I've done</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);


export default PortfolioList;
