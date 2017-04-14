import React from 'react';
import ReactDOM from 'react-dom';

// React Router Deps
// import { BrowserRouter, Match, Miss } from 'react-router';
import { Router, Route, IndexRoute } from 'react-router';
// History ( browserHistory no longer supported within react-router, need history depend (npm i history))
import browserHistory from 'history/createBrowserHistory'

// CSS
import 'normalize-scss';
import './styles/css/index.css';

// Components
import App from './components/App/App';
// import NotFound from './components/NotFound/NotFound';
import Careers from './components/Careers/Careers';

// Create new history object to be passed into the router
const history = browserHistory();

export const Root = () => {

	return (
		<Router history={history}>
		  	<Route path="/careers" component={Careers} />
		</Router>
	);

};

// Render DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
