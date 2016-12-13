import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SnowStorm from 'react-snowstorm';

import Header from './header.js';
import Footer from './footer.js';

const Layout = (props) => {
  let path = props.location.pathname;
  let segment = path.split('/')[1] || 'root';
  
  return (
    <div>
      <Header languageManager={props.route.languageManager}></Header>
      <ReactCSSTransitionGroup transitionName="animate-fade" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
        {React.cloneElement(props.children, {key: segment})}
      </ReactCSSTransitionGroup>
      <Footer></Footer>
      <SnowStorm />
    </div>
  )
};

export default Layout;
