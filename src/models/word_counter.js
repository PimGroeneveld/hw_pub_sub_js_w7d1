const PubSub = require("../helpers/pub_sub.js");

const WordCounter = function (){

};

//method from pub_sub. Subscribe takes in the channel to subscribe to
WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:string-inputted", (event) => { // event here is the detail: payload from pub_sub
    const inputtedString = event.detail;
    const result = this.countWord(inputtedString); // this line counts words via function below
    PubSub.publish("WordCounter:result", result);
  })
};

// function to count words
WordCounter.prototype.countWord = function(string){
    return string.split(" ").length;
  };

module.exports = WordCounter;
