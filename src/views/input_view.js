const PubSub = require("../helpers/pub_sub.js");

const InputView = function () {  //constructs the InputView
// is publisher --> set up channel for the inputview to publih to
};

// below function sets up an event listener, checks for input
InputView.prototype.bindEvents = function(){
  const input = document.querySelector("#text"); // text connects to the text id from the HTML, gets the user input via this way
  input.addEventListener("input", (event) => { // event -> because we want something back
    const inputtedString = event.target.value;
    // input event gets triggered every time a user puts in a string
    PubSub.publish("InputView:string-inputted", inputtedString);
    //creates event and triggers it --> send opbject with key of detail: and payload as value
    //calls publish function from pub_sub --> naming convention is module youre in:what event to look out for, and use - as spaces
  })
};

module.exports = InputView;
