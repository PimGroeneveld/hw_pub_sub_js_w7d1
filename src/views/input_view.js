const PubSub = require("../helpers/pub_sub.js");

const InputView = function () {  //constructs the InputView
// is publisher --> set up channel for the inputview to publih to
};

// below function sets up an event listener, checks for input.
// This function is used in Pub Sub
InputView.prototype.bindEvents = function(){
  const form = document.querySelector("#wordcounter-form"); // #wordcounter-item-form connects to the submit button from the HTML, gets the user input via this way
  form.addEventListener("submit", (event) => { // event -> because we want something back
    event.preventDefault();
    const inputtedString = event.target.text.value;
    // above line connects to the user input you need
    // input event gets triggered every time a user puts in a string
    PubSub.publish("InputView:string-inputted", inputtedString);
    //creates event and triggers it --> send opbject with key of detail: and payload as value
    //calls publish function from pub_sub --> naming convention is module youre in:what event to look out for, and use - as spaces. Thats the main conversion from input to publish i believe
  });
};

module.exports = InputView;
