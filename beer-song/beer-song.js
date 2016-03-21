const thisMany = n => n || 'no more';
const bottles = n => 'bottle' + (n - 1 ? 's' : '');
const one = n => n ? 'one' : 'it';

const song = [...Array(100)].map((_, x) => {
  const y = x ? x - 1 : 99;

  return (`${thisMany(x)} ${bottles(x)} of beer on the wall, `
        + `${thisMany(x)} ${bottles(x)} of beer.\n` +
     (x ? `Take ${one(y)} down and pass it around, `
        : 'Go to the store and buy some more, ')
        + `${thisMany(y)} ${bottles(y)} of beer on the wall.\n`)
        .replace(/^n/, 'N'); // is there a cleaner way?
});

export default ({
  verse: n => song[n],
  sing: (a = 99, b = 0) => song.slice(b, a + 1).reverse().join('\n')
});
