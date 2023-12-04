class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        lookup = {}
        for idx, value in enumerate(nums):
            if value in lookup:
                return True
            else:
                lookup[value]=1 
        return False

