/**
 * 各カラムの末尾には , をつけてください
 */

const sampleObj = {
  key: 'keyName',
  value: 'valueName',
};
console.log(sampleObj);
console.log(sampleObj.key);

/**
 * 存在しないものを指定すると、
 * undefinedが返ってきます
 */
console.log(sampleObj.dummy)

console.log('====================');
const mainCity = {
  tokyo: {
    edogawa_ku: '錦糸町',
    katsushika_ku: 'お台場',
  },
  chiba: '千葉市',
}
console.log(mainCity);
