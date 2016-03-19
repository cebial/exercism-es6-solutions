const sort = s => [...s.toLowerCase()].sort().join('');

export default w => ({
  matches: (...l) => [].concat(...l).filter(v =>
    sort(w) === sort(v) && w.toLowerCase() !== v.toLowerCase())
});
