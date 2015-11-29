import React from 'react';
import Headline from './headline.jsx';


class HeadlinePage extends React.Component {
  getInitialState() {
    return {
      imageUrl: "http://lorempixel.com/400/250",
      type: "secondary"
    };
  }
}
