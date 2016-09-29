import React from 'react';

import Header from '../header.js';
import Footer from '../footer.js';

const AboutPage = (props) => (
  <div>
<Header></Header>
<div className="row">
  <div className="col-xs-12">
    <h1>About Me</h1>
  </div>
</div>
<div className='row'>
  <div className='col-sm-4'>
    <img src="http://placekitten.com/300/300" />
  </div>
  <div className="col-sm-4">
    Coming soon...
  </div>
  <div className="col-sm-4">
    Coming soon...
  </div>
</div>
<Footer></Footer>
</div>
);

export default AboutPage;
