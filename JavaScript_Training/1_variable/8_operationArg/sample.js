/**
 * 関数宣言時に引数の数が不十分なときに備え、
 * 引数に対し、もし定義されなかったときの値を設定することができる
 */
function withArgFunc(first, second = 'default') {
  console.log(first);
  console.log(second);
}

withArgFunc('firstHoge');

function noDefaultFunc(one, two = 'sample') {
  console.log(one);
  console.log(two);
} 

noDefaultFunc('pen', 'apple');
