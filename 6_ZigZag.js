/*
6. ZigZag conversion
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
*/

var convert = function(s, numRows) {
    //create numRows arrays in a array zigzag
    // for char in s, for row between 0 and numRows, put each char down to each array in the nested array zigzag
    //                for row beteen numberRows -1 and 0, put each char up to each array in the nested array zigzag;
    // combine each array in zigzag into one array
    // return the combined arrasy as a string;
    let zigzag=[]
    for (let i=0; i<numRows; i++){
        let row=[];
        zigzag.push(row);
    }

    let i=0;
    while(i<s.length){
        for (let row=0;row<numRows && i<s.length;row++){
            zigzag[row].push(s[i]);
            i++;
        }
        for (let row=numRows-2; row>0 && i<s.length; row--){
            zigzag[row].push(s[i]);
            i++;
        }
    }
    console.log(zigzag);
    let combine=[];
    zigzag.forEach(row =>{
        combine=combine.concat(row)
    })
    return combine.join('');
}

let s = "PAYPALISHIRING", numRows = 3;
console.log(convert(s,numRows));