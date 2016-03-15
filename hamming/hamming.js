export default class {
  compute(a, b) {
    if (a.length != b.length) throw Error('DNA strands must be of equal length.');

    return [...a].filter((val, i) => val != b[i]).length;
  }
}