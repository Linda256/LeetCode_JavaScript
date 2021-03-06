/*
Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].



Example 1:

Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
Output: [null,1,1,1,2,1,4,6]
Explanation:
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.


Note:

Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
There will be at most 10000 calls to StockSpanner.next per test case.
There will be at most 150000 calls to StockSpanner.next across all test cases.
The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.
*/
var StockSpanner = function() {
    this.span=[];
};

/**
 * @param {number} price
 * @return {number}
 */
 //method 1
StockSpanner.prototype.next = function(price) {
    let count =1;
    if (this.span.length===0){
        let curr = [price,1]
        this.span.push(curr);
        console.log('span',this.span);
    } else{
        let i=this.span.length;
        let j=i-1;
        while(j>=0){
            if (price<this.span[j][0]) break;
            if (price>=this.span[j][0]){
                count++;
            }
            j--;
        }
        let curr=[price,count];
        this.span.push(curr);
    }

    //console.log(this.span);

    return count;
};

//method2 better perfomance: consider the count of previous number
StockSpanner.prototype.next2 = function(price) {
    let count =1;
    if (this.span.length===0){
        let curr = [price,1]
        this.span.push(curr);
        console.log('span',this.span);
    } else{
        let i=this.span.length;
        let j=i-1;
        while(j>=0){
            if (price<this.span[j][0]) break;
            if (price>=this.span[j][0]){
              count= count+this.span[j][1];
               j=j-this.span[j][1];
            }
        }
        let curr=[price,count];
        this.span.push(curr);
    }
    return count;
};
/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = Object.create(StockSpanner).createNew()
 * var param_1 = obj.next(price)
 */

 var sp = new StockSpanner();
 sp.next2(100);
 sp.next2(80);
 sp.next2(70);
 console.log(sp.next2(200));