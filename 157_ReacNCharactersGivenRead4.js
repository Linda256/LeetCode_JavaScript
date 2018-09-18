/*157.Reac N Characters Given Read4




The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Example 1:

Input: buf = "abc", n = 4
Output: "abc"
Explanation: The actual number of characters read is 3, which is "abc".
Example 2:

Input: buf = "abcde", n = 5
Output: "abcde"

The question is asking for a C-style api where an output buffer is passed in which you are required to fill in and at the same time return the number of characters that you read and put in the buffer.

With that clarification, the problem just reduces to calling read4 multiple times, if needed, to keep on reading from the input and then managing the output into the passed in output buffer to put only the requested number of characters in it.
*/
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    var read4Buf=[];

    return function(buf, n) {
        let readChars = 0;
        while(n>0) {
            if(read4Buf.length === 0) {
                if(read4(read4Buf) === 0) {
                    return readChars;
                }
            }
            buf.push(read4Buf.shift());
            readChars++;
            n--;

        }
        return readChars;
    };
};