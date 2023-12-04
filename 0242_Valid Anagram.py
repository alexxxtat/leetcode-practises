class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False 
        s_hash = {}
        t_hash = {}
        for idx, value in enumerate(s):
            if value in s_hash:
                s_hash[value] +=1
            elif value not in s_hash:
                s_hash[value] = 1
        for idx, value in enumerate(t):     
            if value in t_hash:
                t_hash[value] +=1
            elif value not in t_hash:
                t_hash[value] = 1 
        return t_hash == s_hash

