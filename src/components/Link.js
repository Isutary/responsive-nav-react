import React from 'react';

// make functional component maybe
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