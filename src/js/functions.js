export function makeBooleans(num) {
  let booleans = [];
  for (let i = 1; i < limit; i+=1) {
    booleans.push(true);
  };
  for (let i = 2; i < limit; i+=1) {
    if (booleans[i-2]) {
      for (let j = i*2; j<= limit; j += i) {
        booleans[j-2] = false;
      }
    }
  }
  return booleans;
}

export function idPrimeNumbers(booleansArray) {
  let primeNumbers = [];
  for (let i = 0; i < booleansArray.length; i+=1) {
    if (booleans[i]) {
      primeNumbers.push(i+2);
    }
  }
  return primeNumbers;
}


