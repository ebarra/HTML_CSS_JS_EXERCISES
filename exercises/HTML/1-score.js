var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;

  if (document.doctype === undefined || document.doctype === null) {
	  	grade.errors.push("You did not add the doctype declaration.");
	} else if(document.doctype.publicId !== ''){
     	grade.errors.push("You did not add the HTML5 doctype declaration.");
  } else{
      grade.score +=5;
	    grade.successes.push("You added the doctype declaration");
  }

  if($(document).find("#main").length === 0){
	  	grade.errors.push("You did not add the <body> element with an id 'main'.");
	} else {
	  grade.score +=5;
	  grade.successes.push("You added the <body> element");
	}

  return grade;
};
