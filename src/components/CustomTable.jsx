import React from 'react';
import CustomTableRow from './CustomTableRow';

export default props => (
  <table>
    {props.header && <tr>{props.header.map(header => <th>{header}</th>)}</tr>}
    {props.rows.map(row => <CustomTableRow row={row} />)}
  </table>
);
