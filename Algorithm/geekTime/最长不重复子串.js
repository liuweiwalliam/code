let str = ""; //输入的字符串

function longestSubStr(str) {
  let strKeyObj = {};
  let maxLength = 0;
  let maxLengthPosition = { start: 0, end: 0 };
  str.forEach(function (item, index) {
    if (!strKeyObj[item] && strKeyObj[item] != 0) {
      strKeyObj[item] = index;
    } else {
      let start = strKeyObj[item];
      let end = index;
      if (maxLength < end - start) {
        maxLength = end - start;
        maxLengthPosition.start = strKeyObj[item];
        maxLengthPosition.end = strKeyObj[item];
      }
    }
  });
  return str.subStr(maxLengthPosition.start, maxLength);
}
