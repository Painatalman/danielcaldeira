import React from 'react';

import Header from '../header.js';
import Footer from '../footer.js';

const NotFoundPage = (props) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <h1>404 - Não encontrado</h1>
        <p>A página requisitada não existe</p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
