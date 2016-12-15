import * as React from 'react';

type STATUS = 'normal' | 'hovered';
const STATUS = {
  normal: 'normal' as STATUS,
  hovered: 'hovered' as STATUS
};

export default class Link extends React.Component<{ page: string }, { class: STATUS }> {
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

export class Link2 extends React.Component<{ page: string }, { class: STATUS }> {
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