import React from 'react';

export default class Headline extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    //if (props.keys({}).length === 0) {

      this.props.imageUrl = "http://lorempixel.com/480/200"
      this.props.type = "secondary";
      this.props.alt = "an image";
    // }
  }

  render () {return <div className="l-highlight l-highlight--{this.props.type}">
    < div className="c-highlight__cover">
      < div className="c-highlight__cover__content">
        < h2 className="c-highlight__cover__title">
          Title
          < /h2>
            < h4 className="c-highlight__cover__subtitle">
              Subtitle
              < /h4 >
                < hr className="c-highlight__cover__line" / >
                  < /div>
                    < /div >
                      < img className="c-highlight__image" src={this.props.imageUrl} alt={this.props.alt}></img>
                        < /div>
                      }
                    }
