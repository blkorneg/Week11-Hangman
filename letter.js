//Controls whether or not the letter appears as "_" or itself
var word = require('./word.js');

function Letter(ltr) {
  // property to store the actual letter  

// property/boolean if the letter can be shown 

  this.letterRender = function() {
    //if appear is false then show the _
    //else appear is true then show character
  };
}

// export to use in word.js
module.exports = Letter;



