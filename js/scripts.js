
//This prompt asks the user to enter in a sentence. It then stores it into a variable.
var question = prompt("enter a sentence");

//This method takes the sentence and turns the first character in to an upper case letter then stores it in a variable.
var capital = question.toUpperCase().charAt(0);

//This method takes the sentences' length.
var length = question.length;

///This method slices part of the string and then returns the partin a new string.
question = question.slice(1);

//This method takes whats been sliced in the beginning of the string and appends the zero index'd character back to question.
question = capital + question;

//This method takes the last part of the string and turns it to upper case.
var lastPart = question.toUpperCase().charAt(length-1);

//This method extracts the zeroth and last part of a string.
question = question.slice(0, length-1);

//This variable combines
question = question + lastPart;
alert(question);
