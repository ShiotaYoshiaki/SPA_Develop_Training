console.log('====================');
var calledVar = 'calledVar';
console.log(calledVar);
calledVar = 'nextString';
console.log(calledVar);

console.log('====================');

let calledLet = 'calledLet';
console.log(calledLet);
calledLet = 'nextString';
console.log(calledLet);

console.log('====================');

const calledConst = 'calledConst';
console.log(calledConst);
/**
 * const は再代入が禁止されているので、
 * 以下を実行するとエラーになります
 * // を削除して実行してみてください
 */
// calledConst = 'nextString';
