var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;

  if($(document).find("h1#title").length === 0){
	  	grade.errors.push("The h1#title selector is not being applied");
	} else {
	  grade.score +=2;
	  grade.successes.push("You applied the h1#title selector, well done.");
	}

  if($(document).find("article#box1").length === 0){
	  	grade.errors.push("The article#box1 selector is not being applied");
	} else {
	  grade.score +=2;
	  grade.successes.push("You applied the article#box1 selector, well done.");
	}

  if($(document).find("article#box2").length === 0){
	  	grade.errors.push("The article#box2 selector is not being applied");
	} else {
	  grade.score +=1;
	  grade.successes.push("You applied the article#box2 selector, well done.");
	}

  if($(document).find("article#box3").length === 0){
	  	grade.errors.push("The article#box3 selector is not being applied");
	} else {
	  grade.score +=1;
	  grade.successes.push("You applied the article#box3 selector, well done.");
	}

  if($(document).find("section#wrapper article.box").length === 0){
	  	grade.errors.push("The 'section#wrapper article.box' selector is not being applied");
	} else {
	  grade.score +=2;
	  grade.successes.push("You applied the 'section#wrapper article.box' selector, well done.");
	}

  if($(document).find("section#wrapper article.box p ").length === 0){
	  	grade.errors.push("The 'section#wrapper article.box p ' selector is not being applied");
	} else {
	  grade.score +=2;
	  grade.successes.push("You applied the 'section#wrapper article.box p' selector, well done.");
	}

  return grade;
};
