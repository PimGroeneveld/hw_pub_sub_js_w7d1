const InputView = require("./views/input_view.js");
const WordCounter= require("./models/word_counter.js");
const ResultView = require("./views/result_view.js");

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents(); //function from input_view

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
