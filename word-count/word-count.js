export default () => ({ count: s => {
  return s.match(/\S+/g).reduce((wc, w) => (wc[w] = ++wc[w] || 1, wc), {});
}});
