import React from 'react';
import { observer } from 'mobx-react';

import Header from '../header.js';
import Footer from '../footer.js';
import Highlight from '../highlight.js';

const HomePage = (props) => (
  <div>
<Header></Header>
<div className="row">
  <div className="col-xs-12">
    <Highlight type="primary" title={props.mainData.title} subtitle={props.mainData.subtitle} category={props.mainData.category} imageUrl={props.mainData.imageUrl} ></Highlight>
  </div>
</div>
<div className="row">
  {
    props.store.projects.map( (item) => {
    return (
      <div className="col-xs-12 col-sm-6">
        <Highlight type={item.type} imageUrl={item.imageUrl} subtitle={item.subtitle} alt={item.alt} title={item.title} category={item.category} />
      </div>
      );
    })
  }
</div>
<Footer></Footer>
</div>
);

export default observer(HomePage);
