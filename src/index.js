module.exports = function reverse (n) {
   
  let g = Math.abs(n)
  let m =  g.toString();
  let i = m.length - 1;

  let str = '';
  while (i >= 0) {
      str = `${str}${m[i]}`;
      i = i - 1;
  }
  return str;
};
