export default class {
  constructor() {
    this._roster = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this._roster));
  }

  grade(grade) {
    return this._roster[grade] || [];
  }

  add(name, grade) {
    this._roster[grade] || (this._roster[grade] = []);
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }
}
