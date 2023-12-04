/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start_idx = 0;
  let end_idx = nums.length - 1;
  let mid_idx;
  while (start_idx <= end_idx) {
    mid_idx = start_idx + Math.floor((end_idx - start_idx) / 2);
    if (nums[mid_idx] === target) {
      return mid_idx;
    }
    if (nums[mid_idx] < target) {
      start_idx = mid_idx + 1;
    } else {
      end_idx = mid_idx - 1;
    }
  }
  return start_idx;
};
