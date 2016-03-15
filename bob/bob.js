export default class {
  hey(s) {
    if (!s.trim()) return 'Fine. Be that way!';
    if (s.toUpperCase() == s && /[A-Z]/.test(s)) return 'Whoa, chill out!';
    if (s.endsWith('?')) return 'Sure.';
    return 'Whatever.';
  }
}
