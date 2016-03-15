const map = {G:'C', C:'G', T:'A', A:'U'};

export default class {
  toRna(s) { return s.replace(/./g, c => map[c]); }
}
