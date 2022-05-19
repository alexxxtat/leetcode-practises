/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start_idx = 1;
    let end_idx = n;
    let firstBadVersion = -1;
    while (start_idx <= end_idx) {
      let mid_idx = start_idx + Math.floor((end_idx - start_idx) / 2);
      if (isBadVersion(mid_idx) === false) {
        start_idx = mid_idx + 1;
      } else {
        end_idx = mid_idx - 1;
        firstBadVersion = mid_idx;
      }
    }
    return firstBadVersion;
  };
};
