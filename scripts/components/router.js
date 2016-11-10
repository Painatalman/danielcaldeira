import React from 'react';

import { Router, browserHistory, hashHistory } from 'react-router';

import routes from '../routes';

export default class AppRoutes extends React.Component{
  render(){return (
  <Router history={browserHistory} routes={routes}>
  </Router>);
}
}

