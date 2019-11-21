import React from 'react';

export default function Link(props) {
  return (
    <div className="link-wrapper">
      {/* eslint-disable-next-line */}
      <a href="#"> {props.link} </a>
    </div>
  );
}