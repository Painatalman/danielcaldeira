import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Header from '../header.js';
import Footer from '../footer.js';
import Highlight from '../highlight.js';

const HomePage = (props) => (
  <div>
<div className='row'>
  <div className='col-xs-12'>
    <Highlight type='primary' title={props.route.mainData.title} subtitle={props.route.mainData.subtitle} category={props.route.mainData.category} imageUrl={props.route.mainData.imageUrl} ></Highlight>
  </div>
</div>
<div className='row'>
  {
    props.route.store.projects.map( (item) => {
      return (
        <div className='col-xs-12 col-sm-6'>
          <Highlight type={item.type} imageUrl={item.imageUrl} subtitle={item.subtitle} alt={item.alt} title={item.title} category={item.category} />
        </div>
      );
    })
  }
</div>
<DevTools />
</div>
);

export default observer(HomePage);
