/**
 * セミコロンの使い分け
 * スコープを作る場合 → つける
 * スコープを作らない場合 → つけない
 */

/**
 * スコープを持つものの定義
 * 1. 引数を持つ
 * 2. 処理の加工ができる
 * 3. 戻り値を持つことができる
 */


 const firstNumber = 2;
 const secondNumber = 5;
 const thirdNumber = 3;
 
 function sample2(num) {
   console.log('sample2の引数: ' + num)
   console.log('secondNumber: ' + secondNumber)
   num += secondNumber;
   console.log('sample2の実行結果: ' + num)
   return num;
}
 function sample1(num) {
   console.log('sample1の引数: ' + num)
   console.log('firstNumber: ' + firstNumber)
   num += firstNumber;
   console.log('sample1の実行結果: ' + num)
   return num;
 }


const result = sample2(thirdNumber) + sample1(thirdNumber);

console.log('result: ' + result);


