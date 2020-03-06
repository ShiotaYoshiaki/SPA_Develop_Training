/**
 * 基本的に、値が意味を持つものが入っていれば!!でtrue
 * 意味を持たないnull, undefined, '' 等はfalse
 */

const string = 'string';
console.log('string: ' + !!string);

const num = 6;
console.log('num: ' + !!num);

// 0は例外
const zero = 0;
console.log('zero: ' + !!zero);

const emptyString = '';
console.log('emptyString: ' + !!emptyString);

const nullParam = null;
console.log('nullParam: ' + !!nullParam);

const undefinedParam = undefined;
console.log('undefinedParam: ' + !!undefinedParam);

const emptyObject = {};
console.log('emptyObject: ' + !!emptyObject);

const emptyArray = [];
console.log('emptyArray: ' + !!emptyArray);
