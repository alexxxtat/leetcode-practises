class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy_date = 0
        sell_date = 1
        max_profit = 0
        while sell_date < len(prices):
            if prices[buy_date] < prices[sell_date]:
                profit = prices[sell_date] - prices[buy_date]
                max_profit= max(profit, max_profit)
            else:
                buy_date = sell_date
            sell_date +=1
        return max_profit
