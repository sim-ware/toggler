import React, { Component } from 'react';
import MultiToggle from 'react-multi-toggle';
import './Toggle.css';

const groupOptions = [
  {
    displayName: 'Couple',
    value: 2
  },
  {
    displayName: 'Family',
    value: 4
  },
];


class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupSize: 2
    };
  }

  onGroupSizeSelect = value => this.setState({ groupSize: value });

  render = () => {
    const { groupSize } = this.state;

    return (
      <span>
        <MultiToggle
        className='Retangle-5'
        options={groupOptions}
          selectedOption={groupSize}
          onSelectOption={this.onGroupSizeSelect}
        />
      </span>
    );
  }


}

export default Toggle;

// <strong>Selected group size:</strong> {groupSize}
// label="Select Group Size"
