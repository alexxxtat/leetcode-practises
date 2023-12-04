class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for idx, value in enumerate(nums):
            if target - value in hash:
                return [idx,hash[target-value]]
            else:
                hash[value] = idx
            