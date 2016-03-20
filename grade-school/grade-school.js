export default (_roster = {}) => ({
  roster: () => JSON.parse(JSON.stringify(_roster)),
  grade: (grade) => _roster[grade] || [],
  add: (name, grade) => { /* eslint no-param-reassign: 0 */
    _roster[grade] = (_roster[grade] || []).concat(name).sort();
  }
});
