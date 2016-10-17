//controls whether or not a letter appears as '_' or itself
var Letter = function(ltr) {
// property to store the actual letter
  this.letter = ltr;
// property/boolean if the letter can be shown
  this.appear = 'false';

  this.letterRender = function() {
    //if appear is false then show the _ , else appear is true then show character
    if(this.appear === 'false'){

    } else{

    }

  };
};

// export to use in word.js
module.exports = Letter;



