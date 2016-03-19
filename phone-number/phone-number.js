export default number => {
  let n = number.replace(/\D/g, '');
  if (n.length === 11 && n[0] === '1') { n = n.slice(1); }
  if (n.length !== 10) n = '0000000000';

  return {
    number: () => n,
    areaCode: () => n.slice(0, 3),
    toString: () => `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`
  };
};
