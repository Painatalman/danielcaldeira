import React from 'react';

import {Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router';

import Layout from './components/layout';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import ContactsPage from './components/pages/contacts';
import NotFoundPage from './components/pages/notfound';

import ProjectStore from './stores/projectStore';
import Project from './models/Project';

import LanguageManager from './config/languages';

let mainData = {
  imageUrl: '/pictures/headlines/imagem_highlight_primary.jpg',
  type: 'primary',
  alt: 'highlight',
  title: 'Principal',
  subtitle: 'Subtítulo'
};


let projectStore = new ProjectStore();
let languageManager = new LanguageManager();

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

const routes =   (
    <Route path='/' component={Layout} languageManager={languageManager}>
      <IndexRoute component={HomePage} mainData={mainData} store={projectStore} languageManager={languageManager}></IndexRoute>
      <Route path='about' component={AboutPage} languageManager={languageManager}></Route>
      <Route path='contacts' component={ContactsPage} languageManager={languageManager}></Route>
      <Route path='*' component={NotFoundPage} languageManager={languageManager}></Route>
    </Route>
);
  
export default routes;
