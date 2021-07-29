const compose = (...fnList) =>
    fnList.reduceRight((prevFn, nextFn) =>
            (...args) => nextFn(prevFn(...args)),
        value => value
    );

module.exports = compose;
