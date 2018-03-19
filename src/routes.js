import React from 'react';
import {Router, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default(
    <Router path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Router path="about" component={AboutPage} />
    </Router>
);