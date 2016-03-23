import bigInt from './big-integer';

export default () => ({
  square: n => bigInt(2).pow(n - 1).toString(),
  total: n => bigInt(2).pow(64).prev().toString()
});
