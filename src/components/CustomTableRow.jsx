import React from 'react';
import CustomTableData from './CustomTableData';

export default props => (
  <tr>{props.row.map(columns => <CustomTableData value={columns} />)}</tr>
);
