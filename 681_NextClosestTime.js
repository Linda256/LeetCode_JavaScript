/*
681. Next Closest Time
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:

Input: "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.  It is not 19:33, because this occurs 23 hours and 59 minutes later.
Example 2:

Input: "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22. It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.
*/
/**
 * @param {string} time
 * @return {string}

 E: 00:00, 11:11, 22:22 return time

 split time to 4 integers
 create all the valid time combination for the 4 integers
 search the next closes time from all the combinations

 hrs = []
 mins = []

 sort hrs and mins
 loop through mins
    if mins[i]>m return time[0]+time[1]+":"+mins[i]
 loop through hrs
    if hrs[i]>h return hrs:mins[0]
 return hrs[0]:mins[0]

 helper method find combination
 var getTimeCombos= function(time, hrs, mins){
    let digits=[time[0],time[1],time[3],time[4]]
    for (let i=0; i<digits.length; i++){
        for (let j=0; j<digits.length; j++){
            combined = digits[i]+digits[j]
            if combined < 59 put combined into mins
            if combined < 24 put combined into hrs
        }
    }
 }
 */

var nextClosestTime = function(time){
    let mins = [];
    let hrs = [];
    let digits=[time[0],time[1],time[3],time[4]];
    if (time[0]===time[1] && time[1]===time[3] && time[3]===time[4]) return time;
    getTimeCombos(digits,hrs,mins);
    console.log('hrs: ',hrs);
    console.log('mins: ',mins);
    let currMin = parseInt(time[3]+time[4],10);
    console.log('current mins: ', currMin);
    let closest = 60;
    //let minFound = false;
    let bigMin = 0;
    for (let min of mins ){
        console.log(min);
        if(min - currMin > 0 && min-currMin < closest){
            closest = min-currMin;
            bigMin = min;
        }
    }
    if (bigMin!==0) return time[0] + time[1] + ':' +bigMin;

    //if need change hr
    // find the smallest in mins
    //smallest of hr- currHr
    let currHr = parseInt(time[0]+time[1],10);
    mins.sort();
    console.log(mins);
    hrs.sort();
    console.log(hrs);
    for (let hr of hrs){
        if (hr < currHr) return hr + ":" + mins[0];
    }


}
var getTimeCombos= function(digits, hrs, mins){
    for (let i=0; i<digits.length; i++){
        for (let j=0; j<digits.length; j++){
            let combined = digits[i]+digits[j];
            if (combined < 60 && !mins.includes(combined)) mins.push(combined);
            if (combined < 24 && !hrs.includes(combined)) hrs.push(combined);
        }
    }
 }



/*

var nextClosestTime = function(time) {
    var hourMap = {};
    var hours = [];

    var minuteMap = {};
    var minutes = [];

    getCombo(time, hourMap, hours, minuteMap, minutes);

    hours.sort();
    minutes.sort();

    var minute = parseInt(time[3] + time[4], 10);
    for (var i = 0; i < minutes.length; i++) {
        var m = parseInt(minutes[i], 10);
        if (minute < m && m <= 59) {
            return time[0] + time[1] + ":" + minutes[i];
        }
    }

    var hour = parseInt(time[0] + time[1], 10);
    var result;
    for (var i = 0; i < hours.length; i++) {
        var h = parseInt(hours[i], 10);
        if (0 < h && hour < h && h <= 23) {
            return hours[i] + ":" + minutes[0];
        }
    }

    return hours[0] + ":" + minutes[0];
};

var getCombo = function(time, hourMap, hours, minuteMap, minutes) {
    if (hours.length) {
        //console.log("hours.length", hours.length);
        return hours;
    }

    var digits = [time[0], time[1], time[3], time[4]]

    for (var i = 0; i < digits.length; i++) {
        var prefix = digits[i];

        for (var j = 0; j < digits.length; j++) {
            var combined = prefix + digits[j];
            var number = parseInt(combined, 10);

            if (number <= 24) {
                if (hourMap[number]) continue;

                hourMap[combined] = combined;
                hours.push(combined);
            }

            if (number <= 59) {
                if (minuteMap[number]) continue;

                minuteMap[combined] = combined;
                minutes.push(combined);
            }
        }
    }
    console.log("hours.length", hours.length);
}
*/
//let time="00:00";
//let time ="11:23";
//let time = "11:00";
let time ="23:01";
let result = nextClosestTime(time);
console.log(result);

