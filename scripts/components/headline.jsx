import React from 'react';

export default class Headline extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render () {return <div className="l-highlight l-highlight--secondary">
    <div className="c-highlight__cover">
      <div className="c-highlight__cover__content">
        <h2 className="c-highlight__cover__title">
          Title
        </h2>
        <h4 className="c-highlight__cover__subtitle">
          Subtitle
        </h4>
        <hr className="c-highlight__cover__line"></hr>
        <h5 className="c-highlight__cover__category">Category</h5>
      </div>
      </div>
      <img className="c-highlight__image" src={this.props.imageUrl} alt={this.props.alt}></img>
    </div>
}
}
