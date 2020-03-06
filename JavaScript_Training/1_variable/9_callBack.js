function sampleFunc() {
  console.log('====================1');
  console.log('sample');
}

function callBackFunc(testFunc) {
  console.log('====================2');
  testFunc();
}

function main() {
  console.log('====================3');
  callBackFunc(sampleFunc);
}

main();