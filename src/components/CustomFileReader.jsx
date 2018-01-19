import React from 'react';

export default props => (
  <input
    type="file"
    accept="text/plain"
    onChange={props.onchange}
  />
);
