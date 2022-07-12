function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib('make', 'best', 'guac'){
    for (var i = )
}

function isSubstring(searchString, subString) {
    var lowerSearch = searchString.toLowerCase();
    var lowerSub = subString.toLowerCase();

    if (lowerSearch.indexOf(lowerSub) > -1) {
        return true;
    }
    return false;
}


function fizzBuzz(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 3 === 0 && i % 5 !== 0 || i % 3 !== 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function firstNPrimes(n) {
    var primeArray = [];

    for (var i = 2; primeArray.length < n; i++) {
        if (isPrime(i)) {
            primeArray.push(i);

        }
    }
    return primeArray;
}

function sumOfNPrimes(n) {
    var sum = 0;
    var primeNums = firstNPrimes(n)
    for (var i = 0; i < primeNums.length; i++) {
        sum += primeNums[i];
    }
    return sum;
}
