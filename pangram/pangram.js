export default s => ({ isPangram: () =>
  new Set(s.toLowerCase().match(/[a-z]/g)).size == 26
});

