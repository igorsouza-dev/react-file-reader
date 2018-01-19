import React from 'react';

const generateList = (items) => {
  const listItems = items.map(item => <li>{item}</li>);
  return (<ul>{listItems}</ul>);
};

export default props => (
  generateList(props.items)
);
