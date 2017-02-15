// Copyright 2004-present Facebook. All Rights Reserved.

const React = require('react');
 
const STATUS = { 
  normal: 'normal', 
  hovered: 'hovered' 
}; 

exports.Link = class Link extends React.Component { 
  constructor() { 
    super(); 
 
    this._onMouseEnter = this._onMouseEnter.bind(this); 
    this._onMouseLeave = this._onMouseLeave.bind(this); 
 
    this.state = { 
      class: STATUS.normal, 
    }; 
  } 
 
  _onMouseEnter() { 
    if (this.state.class === STATUS.hovered) { 
      'if miss'; 
    } 
 
    if (this.state.class !== STATUS.hovered) { 
      'else miss'; 
      this.setState({class: STATUS.hovered}); 
    } 
  } 
 
  _onMouseLeave() { 
    if (this.state.class !== STATUS.normal) { 
      this.setState({class: STATUS.normal}); 
    } 
  } 
 
  render() { 
    const branch1 = true 
      ? 1 
      : 0; 
    const branch2 = false 
      ? 1 
      : 0; 
    const branch3 = true ? 1 : 0; 
    const branch4 = false ? 1 : 0; 
    const a = () => null; 
    const b = true ? () => null : () => false; 
    const branch5 = true || true || false || false; 
   
    return ( 
      <a 
        className={this.state.class} 
        href={this.props.page || '#'} 
        onMouseDown={() => { 
          console.log('multiline miss'); 
        }} 
        onMouseEnter={this._onMouseEnter} 
        onMouseOver={() => console.log('miss')} 
        onMouseLeave={this._onMouseLeave}> 
        {this.props.children} 
      </a> 
    ); 
  } 
} 

exports.difference = function difference(a, b) {
    const branch1 = true
      ? 1
      : 0;
    const branch2 = true ? 1 : 0, thing = 4;
    const branch3 = true || true || false, thing2 = 5;
    const fn = true ? () => null : () => null, x = thing;

    return a - b;
}
