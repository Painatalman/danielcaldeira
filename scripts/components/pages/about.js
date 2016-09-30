import React from 'react';
import { observer } from 'mobx-react';

import Header from '../header.js';
import Footer from '../footer.js';

const AboutPage = (props) => (
  <div>
<div className="row">
  <div className="col-xs-12">
    <h1>About Me - {props.route.languageManager.currentLanguage}</h1>
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
</div>
);

export default observer(AboutPage);
