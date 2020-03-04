function sampleFunc() {
  console.log('sample');
}

function callBackFunc(testFunc) {
  testFunc();
}

function main() {
  callBackFunc(sampleFunc);
}

main();