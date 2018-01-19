import React from 'react';
import { inputTextStyle } from './Styles';

export default props => (
  <input
    type="text"
    placeholder="Digite para pesquisar"
    style={inputTextStyle}
    onChange={props.onchange}
  />
);
