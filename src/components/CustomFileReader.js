import React from 'react';

const openFile = (event) => {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    console.log(reader.result.substring(0, 200));
  };
  reader.readAsText(input.files[0]);
};

export default () => (
  <input type="file" accept="text/plain" onChange={event => openFile(event)} />
);
