

var question = prompt("enter a sentence");


var capital = question.toUpperCase().charAt(0);

var length = question.length;



question = question.slice(1);



question = capital + question;

alert(question);

var bob = question.toUpperCase().charAt(length-1);



question = question.slice(0, length-1);

question = question + bob;
alert(question);
