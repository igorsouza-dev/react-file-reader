import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomTableRow from './CustomTableRow';

export default class CustomTable extends Component {
  renderHeader() {
    // return this.props.header && <tr>{this.props.header.map(th => <th>{th}</th>)}</tr>;
    return this.props.header && <CustomTableRow type="header" row={this.props.header} />;
  }
  renderRows() {
    return this.props.rows.map(row => <CustomTableRow row={row} />);
  }
  render() {
    return (
      <table>
        <thead>
          {this.renderHeader()}
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

CustomTable.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.array,
};
