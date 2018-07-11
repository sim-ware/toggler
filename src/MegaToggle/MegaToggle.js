import React, { Component } from 'react';
import Toggle from '.././Toggle/Toggle';
import './MegaToggle.css';


class MegaToggle extends Component {
  render() {
    return (
      <div className="MegaToggle">
          <div className="Rectangle-5"><Toggle/></div>
          <div className="Rectangle-5"><Toggle/></div>
          <div className="Rectangle-5"><Toggle/></div>
          <strong>Answer is:</strong> {"Incorrect"}
      </div>
    );
  }
}

export default MegaToggle;
