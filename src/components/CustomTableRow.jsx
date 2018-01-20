import React, { Component } from 'react';
import CustomTableData from './CustomTableData';

export default class CustomTableRow extends Component {
  renderRow() {
    if (this.props.type === 'header') {
      return this.props.row.map(columns => (
        columns.map(column => <CustomTableData type="header" value={column} />)
      ));
    }
    return this.props.row.map(columns => <CustomTableData value={columns} />);
  }
  render() {
    return <tr>{this.renderRow()}</tr>;
  }
}
