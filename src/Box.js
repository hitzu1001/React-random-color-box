import React, { Component } from 'react';

class Box extends Component {
  render() {
    const style = {
      width: '180px',
      height: '180px',
      display: 'inline-block',
      backgroundColor: this.props.color
    }
    return <div style={style} />;
  }
}

export default Box;