function simpleNumbers(n) {

    const caches = [];
    for (let i = 2; caches.length < n; i++) {
        let tag = false;
        for (let x = 0; x < i; x++) {
            if (i % caches[x] === 0) {
                tag = true;
                break;
            }
        }
        if (tag === false) {
            caches.push(i)
        };

    }
    return `Массив из ${caches.length} простых чисел это ${caches}`
};



console.time('simpleNumbers');
console.log(simpleNumbers(100));
console.timeEnd('simpleNumbers');

