const PubSub = require("../helpers/pub_sub.js")

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("WordCounter:result", (event) => {
    const result = event.detail;
    this.updateView(result);
  })
}

 //taking input from user and displaying result to the screen
ResultView.prototype.updateView = function(result){
  const resultElement = document.querySelector("#result"); // connects to id=result from HTML
  return resultElement.textContent = result;
};

module.exports = ResultView;
