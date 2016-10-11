    //Letters for computer to choose from

    var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // Set all to start
    
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesRemaining = 9;
    var lettersGuessed = [];
    var letterToGuess = null;

    // Computer guesses random

    var computerGuess = computerLetters[Math.floor(computerLetters.length * Math.random()) ];

    //updates guesses

    var updateGuessesRemaining = function () {
      document.querySelector('#guessRemain').innerHTML = "Guesses Remaining: " + guessesRemaining;
    };

    var updateLetterToGuess = function(){
      letterToGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];
    };

    //Updates letters that were guessed so far
    var updateGuessesSoFar = function() {
      document.querySelector('#let').innerHTML = "Your Guesses So Far: " + lettersGuessed.join(', ');
    };

    var reset = function() {
      totalGuesses = 9;
      guessesRemaining = 9;
      lettersGuessed = [];
      updateLetterToGuess();
      updateGuessesRemaining();
      updateGuessesSoFar();
    }

    updateLetterToGuess();
    updateGuessesRemaining();

    //Updates with the users guess

    document.onkeyup = function(event) {
      guessesRemaining--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    lettersGuessed.push(userGuess);
    updateGuessesRemaining();
    updateGuessesSoFar();

        if(guessesRemaining > 0) {
          if (userGuess == letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
          console.log( computerGuess.toUpperCase() );
              reset();
            }

          }else if (guessesRemaining == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
          console.log( computerGuess.toUpperCase() );
            reset();
          }
        
    };