let nPrimes = 100;

function getNthPrimes(n) {
  let primes = []; // 2 3 5 7 11
  let nonPrimes = [1]; // 1 4 6 8 9 10
  current = 2;
  while (primes.length < n) {
    isPrimeFlag = true;
    for (let i = 2; i < Math.sqrt(current); i++) {
      if (current % i == 0) {
        isPrimeFlag = false;
        break;
      }
    }
    isPrimeFlag ? primes.push(current) : nonPrimes.push(current);
    current++;
  }
  return primes;
}

function listTwinPrimes(nPrimes) {
  pastPrime = 2;
  prime = getNthPrimes(nPrimes).forEach((prime) => {
    if (prime - pastPrime == 2) {
      console.log(pastPrime, prime);
    }
    pastPrime = prime;
  })
}

listTwinPrimes(15222);
