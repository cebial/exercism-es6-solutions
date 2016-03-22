/* eslint no-return-assign: 0, no-param-reassign: 0 */
export default old => Object.keys(old).reduce((score, pts) =>
  (old[pts].forEach(abc => score[abc.toLowerCase()] = +pts), score), {});

