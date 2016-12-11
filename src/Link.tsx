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
    this.setState({class: STATUS.hovered});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.normal});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    );
  }

}