const sampleArray = ['first', 'second', 'third'];
console.log(sampleArray);

console.log('====================');

const contentNum = sampleArray.length;
console.log(contentNum);

console.log('====================');
console.log(sampleArray[1]);

console.log('====================');
/**
 * 存在しない番号を指定すると、
 * undefinedが返ってきます
 */
console.log(sampleArray[100]);
