import React from 'react';

const openFile = (event) => {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const lines = text.split(/[\r\n]+/g);
    let array_line;
    for (let i = 0; i < lines.length; i++) {
      array_line = lines[i].split('	');
      console.log(array_line);
    }
  };
  reader.readAsText(input.files[0]);
};

export default () => (
  <input type="file" accept="text/plain" onChange={event => openFile(event)} />
);
