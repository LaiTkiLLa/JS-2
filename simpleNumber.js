function simpleNumbers(n) {

    caches = []

    for (let i = 1; caches.length < n; i++ ) {
        if (i % 2 !== 0) {
            caches.push(i)

        };
    };

    return `Простых чисел в массиве ${caches.length} это ${caches}`
};



console.time('simpleNumbers');
console.log(simpleNumbers(process.argv[2]));
console.timeEnd('simpleNumbers');

