/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let i = 0;
  let sMap = {};
  let tMap = {};

  while (i < s.length) {
    if (sMap[s[i]] !== undefined) {
      sMap[s[i]] = sMap[s[i]] + 1;
    } else {
      sMap[s[i]] = 1;
    }
    if (tMap[t[i]] !== undefined) {
      tMap[t[i]] = tMap[t[i]] + 1;
    } else {
      tMap[t[i]] = 1;
    }
    i++;
  }
  //console.log(sMap,tmap)
  return _.isEqual(tMap, sMap);
};
