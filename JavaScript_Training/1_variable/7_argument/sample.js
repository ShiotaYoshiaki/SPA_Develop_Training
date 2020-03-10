/**
 * 起動スイッチとして関数を実行した文字列が、
 * 引数の中に入っている
 */
function withArgFunc(first, second, third) {
  console.log(first);
  console.log(second);
  /**
   * 引数として定義されていないものは undefinedとして表示される
   */
  console.log(third);
}

/**
 * 関数を宣言するときに、()内に文字を入れる
 */
withArgFunc('firstHoge', 'secondHoge');
