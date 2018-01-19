import React, { Component } from 'react';
import CustomFileReader from './CustomFileReader';
import CustomInputText from './CustomInputText';
import CustomList from './CustomList';

import { formStyle, containerStyle } from './Styles';
import Reader from '../utils/Reader';

export default class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.changeList = this.changeList.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.arrayFile = [];
  }
  changeList(value) {
    // only look for words with more then 3 letters
    if (value.length > 3) {
      this.setState({
        list: this.searchInArray(value),
      });
    }
  }
  searchInArray(needle) {
    const haystack = this.arrayFile;
    const lowerNeedle = needle.toLowerCase();
    const searchResult = [];
    haystack.map((items) => {
      const item = items[0].toLowerCase();
      if (item.includes(lowerNeedle)) {
        searchResult.push(items);
      }
      return '';
    });
    return searchResult;
  }
  handleFile(file) {
    const reader = new Reader('	');
    reader.fileToArray(file, (arrayFile) => {
      this.setState({ list: arrayFile });
      this.arrayFile = arrayFile;
    });
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
