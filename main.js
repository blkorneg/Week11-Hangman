//require inquirer
var inquirer = require('inquirer');
//require objects/exports
var word = require('./word.js');
var game = require('./game.js');

var hangman = {
  wordBank: game.newWord.wordList,
  wordsWon: 0,
  guessesRemaining: 10,
  currentWord: null,
  //asks user if they are ready to play
  startGame: function() {
    var that = this;
    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Ready to play?"
    }]).then(function(answer) {
      if(answer.play){
        that.newGame();
      } else{
        console.log("Fine, I didn't want to play anyway..");
      }
    })},
  //if they want to play starts new game.
  newGame: function() {
    if(this.guessesRemaining === 10) {
      console.log("Okay! Here we go!");
      console.log('==================');
      //generates random number based on the wordBank
      var randNum = Math.floor(Math.random()*this.wordBank.length);
      this.currentWord = new Word(this.wordBank[randNum]);

      this.keepPromptingUser();
    } else{
      this.resetGuessesRemaining();
      this.newGame();
    }
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 10;
  },
  keepPromptingUser : function(){
    var that = this;

    inquirer.prompt([{
      name: "chosenLtr",
      type: "input",
      message: "Choose a letter:"
    }]).then(function(ltr) {
      
    })
        //console.log(result);
        
        // console log the letter you chose

        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          
        //check if you win only when you are right
        //end game
       
        
        // display the user how many guesses remaining
      
        // render the word

        // display letters the user has guessed

        // if user has remaining guesses and Word isn't found
      
        // if user has no guesses left, show them the word and tell them they lost
      
        // else show the user word and rendered
        
    });
  }
}

hangman.startGame();

