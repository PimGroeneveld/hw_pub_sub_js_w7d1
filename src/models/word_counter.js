const PubSub = require("../helpers/pub_sub.js");

const WordCounter = function (){

};

//method from pub_sub. Subscribe takes in the channel to subscribe to
WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:string-inputted", (event) => { // event here is the callback. so states: wait for this event
    const inputtedString = event.detail; // detail here refers to the detail: from pub_sub
    const result = this.countWord(inputtedString); // this line counts words via function below
    PubSub.publish("WordCounter:result", result);
  });
};

// function to count words
WordCounter.prototype.countWord = function(string){
    return string.split(" ").length;
  };
// splits up string by spaces, then counts the words(items in array) --> flaw: counts two words + a space as 3 words
module.exports = WordCounter;
