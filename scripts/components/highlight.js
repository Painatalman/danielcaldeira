import React from 'react';

const Highlight = (props) =>  {
  let highlightClassName = `l-highlight l-highlight--${props.type}`;
  
  return <div className={highlightClassName}>
    <div className='c-highlight__cover'>
    <div className='c-highlight__cover__content'>
      <h2 className='c-highlight__cover__title'>
        {props.title}
      </h2>
      <h4 className='c-highlight__cover__subtitle'>
        {props.subtitle}
      </h4>
      <hr className='c-highlight__cover__line'></hr>
      <h5 className='c-highlight__cover__category'>{props.category}</h5>
    </div>
    </div>
    <img className='c-highlight__image' src={props.imageUrl} alt={props.alt}></img>
    </div>
};

Highlight.propTypes = {
  type: React.PropTypes.oneOf(['primary','secondary']),
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  category: React.PropTypes.string,
  imageUrl: React.PropTypes.string
};
Highlight.defaultProps = {
  type: 'secondary',
  title: 'Project X',
  subtitle: 'A true mistery',
  category: 'Works',
  imageUrl: 'http://placehold.it/360/240'
};

export default Highlight;
