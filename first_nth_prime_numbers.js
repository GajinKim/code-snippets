let nPrimes = 10;
let primes = []; // 2 3 5 7 11
let nonPrimes = [1]; // 1 4 6 8 9 10

function getNthPrimes(n) {
    current = 2;
    while (primes.length < n) {
        isPrimeFlag = true;
        for (let i = 2; i < current; i++) {
            if (current % i == 0) {
                isPrimeFlag = false;
                break;
            }
        }
        isPrimeFlag ? primes.push(current) : nonPrimes.push(current);
        current++;
    }
}

getNthPrimes(nPrimes);

const sumOfFirstNthPrimes = primes.reduce((sum, number) => {
    return sum += number;
}, 0)

console.log('primes:', primes.join(" "));
console.log('non primes:', nonPrimes.join(" "));
console.log('sum of first', nPrimes, 'prime numbers:', sumOfFirstNthPrimes);

module.exports = { getNthPrimes }