import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './components/router';

ReactDOM.render(
  <AppRouter></AppRouter>, document.getElementById('main-app')
);

let konamiCode = require('./helpers/helpers-js/utils/kcode.js')({}, () => alert('----- By: Carlos Batman -----'));
