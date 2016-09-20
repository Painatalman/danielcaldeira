import React from 'react';

export default class Highlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {return <div className="l-highlight l-highlight--{this.props.type}">
    <div className="c-highlight__cover">
      <div className="c-highlight__cover__content">
        <h2 className="c-highlight__cover__title">
          {this.props.title}
        </h2>
        <h4 className="c-highlight__cover__subtitle">
          {this.props.subtitle}
        </h4>
        <hr className="c-highlight__cover__line"></hr>
        <h5 className="c-highlight__cover__category">{this.props.category}</h5>
      </div>
      </div>
      <img className="c-highlight__image" src={this.props.imageUrl} alt={this.props.alt}></img>
    </div>
}
}
