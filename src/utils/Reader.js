export default class Reader {
  constructor(separator) {
    this.separator = separator;
    this.arrayFile = [];
  }

  fileToArray(file, callback) {
    const reader = new FileReader();
    this.arrayFile = [];
    reader.onload = () => {
      const text = reader.result;
      const lines = text.split(/[\r\n]+/g);
      let arrayLine;
      for (let i = 0; i < lines.length; i += 1) {
        arrayLine = lines[i].split(this.separator);
        this.arrayFile.push(arrayLine);
      }
      callback(this.arrayFile);
    };
    reader.readAsText(file);
  }
}
