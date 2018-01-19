import React from 'react';

const generateList = (items) => {
  // items.map(item => console.log(item));

  const listItems = items.map(item => (<li>{item}</li>));

  return (<ul>{listItems}</ul>);
};

export default props => (
  generateList(props.items)
);
