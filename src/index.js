module.exports = function reverse (n) {
    n = Math.abs(n);
    n = String(n).split('').reverse().join('');
    n = +n;
    return n
}
