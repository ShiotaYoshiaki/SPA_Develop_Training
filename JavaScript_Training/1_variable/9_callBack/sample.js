function sampleFunc() {
  console.log('====================1');
  console.log('sample');
}

function secondFunc(callBackFunc) {
  console.log('====================2');
  callBackFunc();
}

function main() {
  console.log('====================3');
  secondFunc(sampleFunc);
}

main();
