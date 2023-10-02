let numero = 73;
console.log(isPrime(numero));
function isPrime(n, d = 2) {
    if (d === n) {
        return true;
    }
    if (n % d === 0) {
        return false;
    } else {
        return isPrime(n, d + 1);
    }
}
