export default function anagram(word) {
  /* eslint one-var: 0, indent: 0, one-var-declaration-per-line: 0 */
  const clean = s => s.toLowerCase(),
        sort = s => [...s].sort().join(''),
        cleaned = clean(word), sorted = sort(cleaned),
        check = s => sorted === sort(clean(s)) && cleaned !== clean(s);

  return { matches: (...list) => [].concat(...list).filter(check) };
}
