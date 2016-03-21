const getRand = x => Math.floor(Math.random() * x);
const genChar = () => String.fromCharCode(getRand(26) + 65);
const genName = () => genChar() + genChar() + ('00' + getRand(1000)).slice(-3);
const usedNames = new Set();

export default class {
  constructor() { this.reset(); }
  get name() { return this._name; }
  reset() { /* eslint no-cond-assign:0 */
    while (usedNames.has(this._name = genName()));
    usedNames.add(this._name);
  }
}
