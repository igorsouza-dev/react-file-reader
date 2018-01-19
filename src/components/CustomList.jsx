import React from 'react';

const generateList = (items) => {

  items.map(item => console.log(item));
  const listItems = items.map((item) => {
    // console.log(item);
    // if (item.constructor === Array) {
    // console.log('Foi');
    // console.log(item);
    // let li = '';
    // for (let i = 0; i < item.length; i += 1) {
    //   li += `${item} `;
    //   console.log(li);
    // }
    // return (<li>{li}</li>);
    // }

    return (<li>{item}</li>);
  });

  return (<ul>{listItems}</ul>);
};

export default props => (
  generateList(props.items)
);
