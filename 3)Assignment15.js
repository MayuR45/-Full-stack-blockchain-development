function secondDerivative(b, m) {
  let fDoublePrime = b*(b-1)*Math.pow(m, b-2) + b*(Math.exp(b*m)) + m*(Math.exp(b*m));
  return fDoublePrime;
}
