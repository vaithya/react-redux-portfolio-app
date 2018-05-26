import React from 'react';
import ReactDOM from 'react-dom';

// Named exports
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';

// ReactDOM.render(routes, document.getElementById('app'));
ReactDOM.render(<AppRouter />, document.getElementById('app'));
