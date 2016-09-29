import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import ContactsPage from './components/pages/contacts';

import ProjectStore from './stores/projectStore';
import Project from './models/Project';

let mainData = {
  imageUrl: '/pictures/headlines/imagem_highlight_primary.jpg',
  type: 'primary',
  alt: 'highlight',
  title: 'Principal',
  subtitle: 'Subtítulo'
};

window.Project = Project;
window.projectStore = new ProjectStore();

let dataItems = [
  {
    imageUrl: '/pictures/headlines/imagem_ideias_empalco.jpg',
    type: 'secondary',
    alt: 'highlight',
    title: 'Ideias em Palco',
    subtitle: 'Subtítulo',
    category: 'Category'
  },
  {
    imageUrl: 'http://placehold.it/540x300',
    type: 'secondary',
    alt: 'highlight',
    title: 'Title',
    subtitle: 'Subtítulo',
    category: 'Category'
  },
  {
    imageUrl: 'http://placehold.it/540x300',
    type: 'secondary',
    alt: 'highlight',
    title: 'Title',
    subtitle: 'Subtítulo',
    category: 'Category'
  },
  {
    imageUrl: 'http://placehold.it/540x300',
    type: 'secondary',
    alt: 'highlight',
    title: 'Title',
    subtitle: 'Subtítulo',
    category: 'Category'
  }
];

dataItems.forEach((item) => projectStore.addProject(item));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={HomePage} mainData={mainData} store={projectStore}></Route>
    <Route path='/about' component={AboutPage}></Route>
    <Route path='/contacts' component={ContactsPage}></Route>
  </Router>
    , document.getElementById('main-app')

);

let konamiCode = require('./helpers/helpers-js/utils/kcode.js')({}, () => alert('----- By: Carlos Batman -----'));
