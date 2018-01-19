import React from 'react';

const openFile = (event) => {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const lines = text.split(/[\r\n]+/g);
    let arrayLine;
    for (let i = 0; i < lines.length; i += 1) {
      arrayLine = lines[i].split('	');
      console.log(arrayLine);
    }
  };
  reader.readAsText(input.files[0]);
};

export default () => (
  <input type="file" accept="text/plain" onChange={event => openFile(event)} />
);
