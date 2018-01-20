import React, { Component } from 'react';

export default class CustomTableData extends Component {
  renderData() {
    if (this.props.type === 'header') {
      return <th>{this.props.value}</th>;
    }
    return (
      <td>{this.props.value}</td>
    );
  }
  render() {
    return this.renderData();
  }
}
