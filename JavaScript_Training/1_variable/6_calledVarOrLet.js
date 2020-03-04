/**
 * var → 関数スコープ
 * let → ブロックスコープ
 */

function varCalled() {
  console.log('==================== start varCalled');
  var x = 'hoge';
  console.log(x);
  {
    var x = 'hogehoge';
    console.log(x);
  }
  console.log(x);
  console.log('==================== end varCalled');
}
varCalled();

function letCalled() {
  console.log('==================== start letCalled');
  let y = 'hoge';
  console.log(y);
  {
    let y = 'hogehoge';
    console.log(y);
  }
  console.log(y);
  console.log('==================== end letCalled');
}
letCalled();
