import React, { Component } from 'react';
import CustomFileReader from './CustomFileReader';
import CustomInputText from './CustomInputText';
import CustomList from './CustomList';

import { formStyle, containerStyle } from './Styles';
import Reader from '../utils/Reader';


export default class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [1, 2, 3, 5] };
    this.changeList = this.changeList.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  changeList(value) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => value),
    });
  }
  handleFile(file) {
    const reader = new Reader('	');
    reader.openFile(file, (arrayFile) => { this.setState({ list: arrayFile }); });
  }
  render() {
    return (
      <form style={formStyle}>
        <div style={containerStyle}>
          <CustomFileReader onchange={event => this.handleFile(event.target.files[0])} />
          <CustomInputText onchange={event => this.changeList(event.target.value)} />
          <div >
            <CustomList items={this.state.list} />
          </div>
        </div>
      </form>
    );
  }
}
