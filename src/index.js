

Math.SQRT3 = Math.sqrt(3);
Math.SQRT5 = Math.sqrt(5);
Math.SQRT6 = Math.sqrt(6);
Math.SQRT10 = Math.sqrt(10);
Math.PHI = (1 + Math.SQRT5) / 2;
Math.GOLDEN_RATIO = Math.PHI;
Math.SILVER_RATIO = 1 + Math.SQRT2;

/**
 * Checks if a given number is an integer.
 * @param {number} number The number to be checked.
 * @returns `true` if the number is an integer, otherwise `false`.
 */
Math.isInt = function(number) {
    if (typeof number != 'number') throw new TypeError('Expected number, got ' + typeof number);
    return number % 1 == 0;
}

/**
 * Generates a random number between
 * @param {number} min The minimum number to generate
 * @param {number} max The maximum number to generate
 * @returns a random number
 */
Math.randomBetween = function(min, max) {
    if (!min) throw new Error('Trying to generate a random number without specifying the minimum range');
    if (!max) throw new Error('Trying to generate a random number without specifying the maximum range');
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Rounds a given number to `x` decimal places.
 * @param {number} number The number to be rounded.
 * @param {number} decimalPlaces The amount of decimal places to round to. Use negative numbers to round to digits before the decimal point.
 * @returns the rounded number
 */
Math.roundTo = function(number, decimalPlaces = 1) {
    if (number == undefined) throw new TypeError('Cannot perform Math rounding on undefined');
    if (typeof number != 'number') throw new TypeError('Expected number, got ' + typeof number);
    return Math.round(number * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
}

/**
 * Raises a given number to the second power
 * @param {number} number The number to be squared
 * @returns the squared number
 */
Math.square = function(number) {
    if (typeof number != 'number') throw new TypeError('Expected number, got ' + typeof number);
    return Math.pow(number, 2);
}

/**
 * Raises a given number to the third power
 * @param {number} number The number to be cubed
 * @returns the cubed number
 */
Math.cube = function(number) {
    if (typeof number != 'number') throw new TypeError('Expected number, got ' + typeof number);
    return Math.pow(number, 3);
}

/**
 * Calculates the factorial of a positive integer, n
 * @param {number} n the factorial to be calculated
 * @returns the factorial of n
 */
Math.factorial = function(n) {
    if (typeof n != 'number') throw new TypeError('Expected number, got ' + typeof n);
    if (!Math.isInt(n)) throw new TypeError('Expected a positive integer, got a floating-point number');
    if (n < 0) throw new TypeError('Expected positive integer, got negative integer');

    if (n == 0) return 1;

    let num = 1;
    for (let i = 1; i <= n; i++) num *= i;
    return num;
}

/**
 * Calculates the falling factorial of a positive integer *n* with *k* steps: `n!/(n-k)!`.
 * @param {number} n A positive integer
 * @param {number} k The number of steps to fall
 * @returns Falling factorial of *n* with *k* steps. If `k > n` then 0 is returned.
 */
Math.fallingFactorial = function(n, k) {
    if (typeof n != 'number') throw new TypeError('Expected number, got ' + typeof n + ' as first argument');
    if (!Math.isInt(n)) throw new TypeError('Expected a positive integer, got a floating-point number as first argument');
    if (n < 0) throw new TypeError('Expected a positive integer, got negative integer as first argument');
    if (typeof k != 'number') throw new TypeError('Expected number, got ' + typeof k + ' as second argument');
    if (!Math.isInt(k)) throw new TypeError('Expected a positive integer, got a floating-point number as second argument');
    if (k < 0) throw new TypeError('Expected a positive integer, got negative integer as second argument');

    if (k > n) return 0;

    return Math.factorial(n) / Math.factorial(n - k);
}

/**
 * Calculates the binomial coefficient of a positive integer *n* with *k* choices (*n* choose *k*): `n!/k!(n-k)!`.
 * @param {number} n A positive integer
 * @param {number} k The number of choices
 * @returns The binomial coefficient of *n* and *k*.
 */
Math.binomialCoefficient = function(n, k) {
    if (typeof n != 'number') throw new TypeError('Expected number, got ' + typeof n + ' as first argument');
    if (!Math.isInt(n)) throw new TypeError('Expected a positive integer, got a floating-point number as first argument');
    if (n < 0) throw new TypeError('Expected a positive integer, got negative integer as first argument');
    if (typeof k != 'number') throw new TypeError('Expected number, got ' + typeof k + ' as second argument');
    if (!Math.isInt(k)) throw new TypeError('Expected a positive integer, got a floating-point number as second argument');
    if (k < 0) throw new TypeError('Expected a positive integer, got negative integer as second argument');

    if (k > n) return 0;

    return Math.factorial(n) / Math.factorial(k) / Math.factorial(n - k);
}

/**
 * Calculates the **G**reatest **C**ommon **D**ivisor of two integers *a* and *b*.
 * 
 * Based on the [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations).
 * @param {number} a First integer.
 * @param {number} b Second integer.
 * @returns the greatest common divisor of *a* and *b*.
 */
Math.gcd = function(a, b) {
    if (typeof a != 'number') throw new TypeError('Expected number, got ' + typeof a + ' as first argument');
    if (!Math.isInt(a)) throw new TypeError('Expected a positive integer, got a floating-point number as first argument');
    if (typeof b != 'number') throw new TypeError('Expected number, got ' + typeof b + ' as second argument');
    if (!Math.isInt(b)) throw new TypeError('Expected a positive integer, got a floating-point number as second argument');

    if (a == Infinity || a == -Infinity || b == Infinity || b == -Infinity) return Infinity;

    while (b != 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

/**
 * Calculates the **L**east **C**ommon **M**ultiple of two integers *a* and *b*.
 * 
 * Based on the [Euclidean Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations).
 * @param {number} a First integer.
 * @param {number} b Second integer.
 * @returns the least common multiple of *a* and *b*.
 */
Math.lcm = function(a, b) {
    if (typeof a != 'number') throw new TypeError('Expected number, got ' + typeof a + ' as first argument');
    if (!Math.isInt(a)) throw new TypeError('Expected a positive integer, got a floating-point number as first argument');
    if (typeof b != 'number') throw new TypeError('Expected number, got ' + typeof b + ' as second argument');
    if (!Math.isInt(b)) throw new TypeError('Expected a positive integer, got a floating-point number as second argument');

    if (a == Infinity || a == -Infinity || b == Infinity || b == -Infinity) return 0;

    return Math.abs(a * b) / Math.gcd(a, b);
}

/**
 * Calculates the average of the given numbers.
 * 
 * Numbers can be either provided in an array, or passed as parameters into the function.
 * @param {number} num Number(s) to be calculated
 * @param  {...number} nums More numbers to be calculated
 * @returns the average of the given numbers. If no numbers are given, returns 0.
 */
Math.average = function(num, ...nums) {
    if (!Array.isArray(num)) num = [num, ...nums];
    else num = [...num, ...nums];

    if (!num.length) return 0;

    let sum = 0;
    for (const n of num) {
        sum += n;
    }
    return sum / num.length;
}
/**
 * Calculates the weighted average of the given numbers.
 * 
 * Numbers have to be provided in a two-dimensional array. Each array should contain a value and its weight as numbers. If the weight is not provided, it is assumed to be 1.
 * @param {number} numbers two-dimensional array of numbers and their weights to be calculated. Example given below.
 * @returns the weighted average of the given numbers and their weights. If no numbers are given, returns 0.
 * 
 * Example of the expected array:
 * ```jsonc
 * [
 * [4, 2],
 * [2.5, 6],
 * [number, weight],
 * ]
 * ```
 */
Math.weightedAverage = function (numbers) {
    if (!Array.isArray(numbers)) throw new TypeError('Expected array, got ' + typeof numbers);

    if (!numbers.length) return 0;
    
    let numSum = 0;
    let weightSum = 0;
    for (const [item, i] of numbers) {
        if (!Array.isArray(item)) throw new TypeError('Expected array, got ' + typeof item + ' on index ' + i);
        if (Number.isNaN(item[0])) throw new TypeError('Expected number as first item in array, got ' + typeof item[0] + ' on index ' + i);
        numSum += item[0] * (item[1] ?? 1);
        weightSum += item[1] ?? 1;
    }
    return numSum / weightSum;
}

/**
 * Calculates the geometric mean, or geometric average of the given numbers.
 * 
 * Numbers can be either provided in an array, or passed as parameters into the function.
 * @param {number} num Number(s) to be calculated
 * @param  {...number} nums More numbers to be calculated
 * @returns the geometric mean of the given numbers. If no numbers are given, returns 0.
 */
Math.geometricMean = function (num, ...nums) {
    if (!Array.isArray(num)) num = [num, ...nums];
    else num = [...num, ...nums];

    if (!num.length) return 0;

    let product = 1;
    for (const n of num) {
        product *= n;
    }
    return Math.sqrt(product);
}

/**
 * Calculates the mean (the middle value) of the given numbers.
 * 
 * Numbers can be either provided in an array, or passed as parameters into the function.
 * @param {number} num Number(s) to be calculated
 * @param  {...number} nums More numbers to be calculated
 * @returns the mean of the given numbers. If no numbers are given, returns 0.
 */
Math.mean = function (num, ...nums) {
    if (!Array.isArray(num)) num = [num, ...nums];
    else num = [...num, ...nums];

    if (!num.length) return 0;

    num = num.sort();
    let n = Math.round(num.length / 2);
    if (num.length % 2) return num[n - 1];
    return Math.average(num[n], num[n - 1]);
}

/**
 * Calculates the variance of the given numbers.
 * 
 * Numbers can be either provided in an array, or passed as parameters into the function.
 * @param {number} num Number(s) to be calculated
 * @param  {...number} nums More numbers to be calculated
 * @returns the variance of the given numbers. If no numbers are given, returns 0.
 */
Math.variance = function (num, ...nums) {
    if (!Array.isArray(num)) num = [num, ...nums];
    else num = [...num, ...nums];

    if (!num.length) return 0;

    let avg = Math.average(num);
    let sum = 0;
    for (const n of num) {
        sum += (n - avg) ** 2;
    }
    return sum / num.length;
}

/**
 * Calculates the standard deviation of the given numbers.
 * 
 * Numbers can be either provided in an array, or passed as parameters into the function.
 * @param {number} num Number(s) to be calculated
 * @param  {...number} nums More numbers to be calculated
 * @returns the standard deviation of the given numbers.If no numbers are given, returns 0.
 */
Math.standardDeviation = function (num, ...nums) {
    if (!Array.isArray(num)) num = [num, ...nums];
    else num = [...num, ...nums];

    if (!num.length) return 0;

    return Math.sqrt(Math.variance(num));
}