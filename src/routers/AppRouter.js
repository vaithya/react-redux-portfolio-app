import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './../components/NotFound';
import Header from './../components/Header';
import HomePage from './../components/HomePage';
import ContactPage from './../components/ContactPage';
import PortfolioItemPage from './../components/PortfolioItem';
import PortfolioList from './../components/PortfolioList';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/portfolio/:id" component={PortfolioItemPage} />
            <Route path="/portfolio" component={PortfolioList} exact={true}/> 
            <Route component={NotFound} />
          </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
