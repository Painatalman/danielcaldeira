import React from 'react';

import Header from './header.js';
import Footer from './footer.js';

const Layout = (props) => (
  <div>
<Header languageManager={props.route.languageManager}></Header>
{props.children}
<Footer></Footer>
</div>
);

export default Layout;
