import React from 'react';

export default class Link extends React.Component {
  render() {
    return (
      <div className="link-wrapper">
        { /* eslint-disable-next-line */}
        <a href="#"> {this.props.link} </a>
      </div>
    );
  }
}