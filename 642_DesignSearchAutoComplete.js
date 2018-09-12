/*
642 Design Search Autocomplete System

Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#'). For each character they type except '#', you need to return the top 3 historical hot sentences that have prefix the same as the part of sentence already typed. Here are the specific rules:

The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same degree of hot, you need to use ASCII-code order (smaller one appears first).
If less than 3 hot sentences exist, then just return as many as you can.
When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
Your job is to implement the following functions:

The constructor function:

AutocompleteSystem(String[] sentences, int[] times): This is the constructor. The input is historical data. Sentences is a string array consists of previously typed sentences. Times is the corresponding times a sentence has been typed. Your system should record these historical data.

Now, the user wants to input a new sentence. The following function will provide the next character the user types:

List<String> input(char c): The input c is the next character typed by the user. The character will only be lower-case letters ('a' to 'z'), blank space (' ') or a special character ('#'). Also, the previously typed sentence should be recorded in your system. The output will be the top 3 historical hot sentences that have prefix the same as the part of sentence already typed.


Example:
Operation: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])
The system have already tracked down the following sentences and their corresponding times:
"i love you" : 5 times
"island" : 3 times
"ironman" : 2 times
"i love leetcode" : 2 times
Now, the user begins another search:

Operation: input('i')
Output: ["i love you", "island","i love leetcode"]
Explanation:
There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.

Operation: input(' ')
Output: ["i love you","i love leetcode"]
Explanation:
There are only two sentences that have prefix "i ".

Operation: input('a')
Output: []
Explanation:
There are no sentences that have prefix "i a".

Operation: input('#')
Output: []
Explanation:
The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.

Note:
The input sentence will always start with a letter and end with '#', and only one blank space will exist between two words.
The number of complete sentences that to be searched won't exceed 100. The length of each sentence including those in the historical data won't exceed 100.
Please use double-quote instead of single-quote when you write test cases even for a character input.
Please remember to RESET your class variables declared in class AutocompleteSystem, as static/class variables are persisted across multiple test cases. Please see here for more details.
*/

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
  this.sentenceFreq=[];
  for (let i=0;i<times.length;i++){
    let sentence={};
    sentence.sec = sentences[i];
    sentence.freq = times[i];
    this.sentenceFreq.push(sentence);
  }
  this.orderFreq();
  this.inputStr='';
  this.found=false;
};

AutocompleteSystem.prototype.orderFreq=function(){
  this.sentenceFreq.sort((a,b) => {
    if (a.freq>b.freq) return -1;
    else if (a.freq<b.freq) return 1;
    else if (a.sec>b.sec) return 1;
    else return -1;
  })
}

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {

  let result=[];
  if (c!=="#"){
    //search input in sentenceFreq
    this.found=false;
    this.inputStr=this.inputStr+c;
    //console.log('this.inputStr not# ' + this.inputStr);
    let k=0;
    for (let i=0;i<this.sentenceFreq.length; i++){
      //console.log(this.sentenceFreq[i].sec);
      if (this.sentenceFreq[i].sec.indexOf(this.inputStr) === 0){
        result.push(this.sentenceFreq[i].sec);
        this.found=true;
        k++;
        if (k===3) break;
      }

    }
  } else if (c==="#"){
     if (this.found === false){
      //console.log("this.inputStr:  with # ",this.inputStr);
        let sentence={};
        sentence.sec = this.inputStr;
        sentence.freq = 1;
        this.sentenceFreq.push(sentence);
     } else {
          for (let i=0;i<this.sentenceFreq.length; i++){
            if (this.sentenceFreq[i].sec===this.inputStr){
              this.sentenceFreq[i].freq++;
              break;
            }
           }
    }
    this.orderFreq();
    this.inputStr='';
  }
  return result;
};

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = Object.create(AutocompleteSystem).createNew(sentences, times)
 * var param_1 = obj.input(c)
 */
let auto = new AutocompleteSystem(["i love you","island","iroman","i love leetcode"],[5,3,2,2]);
console.log(auto.sentenceFreq);
auto.input("i");
//console.log("i love")
auto.input(" ");

auto.input("a");
auto.input("#");
auto.input("i");
auto.input(" ");
console.log(auto.sentenceFreq);
auto.input("a");
auto.input("#");
auto.input("i");
auto.input(" ");
let result2 = auto.input("a");
console.log("result2 ", result2);
// console.log("this inputSTr", auto.inputStr);
console.log(auto.sentenceFreq);

