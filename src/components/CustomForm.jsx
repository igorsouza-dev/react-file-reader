import React, { Component } from 'react';
import CustomFileReader from './CustomFileReader';
import CustomInputText from './CustomInputText';
import CustomTable from './CustomTable';

import { formStyle, containerStyle, results } from './Styles';
import Reader from '../utils/Reader';

export default class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], header: [], showSearchBar: false };
    this.changeList = this.changeList.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.showSearchBar = false;
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
    // using tab as a separator
    const reader = new Reader('	');
    reader.fileToArray(file, (arrayFile) => {
      const header = arrayFile.splice(0, 1);
      this.setState({ list: arrayFile, header, showSearchBar: true });
      this.arrayFile = arrayFile;
    });
  }
  render() {
    return (
      <form style={formStyle}>
        <div style={containerStyle}>
          <CustomFileReader onchange={event => this.handleFile(event.target.files[0])} />
          {this.state.showSearchBar &&
          <CustomInputText onchange={event => this.changeList(event.target.value)} />}
          {this.state.list.length > 0 &&
          <div style={results}>
            <CustomTable header={this.state.header} rows={this.state.list} />
          </div>
          }
        </div>
      </form>
    );
  }
}
