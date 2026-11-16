function isPrime (num) {
    if (num <= 1) return false;
    let counter = 0;
    for (let i = 1; i < num; i++) {
        if (num%i === 0) counter++;
    }
    if (counter > 1) return false;
    else return true;
}

module.exports = {isPrime};