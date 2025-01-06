function processValues(a, b) {
    if (typeof a === typeof b) {
        console.log('Both variables have the same type.');
    } else {
        console.log('Variables have different types.');
    }
}

processValues('hello', 42); // Output: Variables have different types.
processValues(null, undefined); // Output: Both variables have the same type.
