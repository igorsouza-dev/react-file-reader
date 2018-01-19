import React, { Component } from 'react';
import CustomFileReader from './CustomFileReader';
import CustomInputText from './CustomInputText';
import CustomList from './CustomList';

import { formStyle, containerStyle } from './Styles';

export default class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [1, 2, 3, 5] };
  }
  changeList(value) {
    this.setState({ list: this.state.list.map(item => (`${item} ${value}`)) });
  }
  render() {
    return (
      <form style={formStyle}>
        <div style={containerStyle}>
          <CustomFileReader />
          <CustomInputText onchange={value => this.changeList('s')} />
          <div >
            <CustomList items={this.state.list} />
          </div>
        </div>
      </form>
    );
  }
}
