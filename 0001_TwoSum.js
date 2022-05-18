var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let subtractResult = target - nums[i];
    if (map.get(subtractResult) !== undefined) {
      return [map.get(subtractResult), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
