var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;

	if($(document).find("h1").length === 0){
	  	grade.errors.push("You did not add the <h1> element");
	} else {
	  grade.score +=1;
	  grade.successes.push("You added the <h1> element");
	}
	if($(document).find("body h1").length === 0){
	  	grade.errors.push("The <h1> element should be inside <body>.");
	} else {
	  grade.score +=1;
	  grade.successes.push("The <h1> element is inside the body element");
	}
	if($(document).find("body h1#title").length === 0){
	  	grade.errors.push("The <h1> element should have id 'title'.");
	} else {
	  grade.score +=1;
	  grade.successes.push("The <h1> element has id 'title'.");
	}
	if($(document).find("body h1#titulo").text() === 'My fist HTML page'){
	  	grade.errors.push("The <h1> element should have the content 'My fist HTML page'");
	} else {
	  grade.score +=1;
	  grade.successes.push("The <h1> element has the content 'My fist HTML page'");
	}
	if($(document).find("body p").length === 0){
	  	grade.errors.push("The page should have a p element inside body");
	} else {
	  grade.score +=1;
	  grade.successes.push("The page has a p element inside body");
	}
	if($(document).find("body p.myp").length === 0){
	  	grade.errors.push("The p element should have class myp");
	} else {
	  grade.score +=2;
	  grade.successes.push("The p element has class myp");
	}
	if($(document).find("body img").length === 0){
	  	grade.errors.push("The page should have an img element with an image of your choice");
	} else {
	  grade.score +=1;
	  grade.successes.push("The page has an img element with an image of your choice");
	}
	if($(document).find("body img#myimg").length === 0){
	  	grade.errors.push("The image should have an id myimg");
	} else {
	  grade.score +=2;
	  grade.successes.push("The image has an id myimg");
	}

  return grade;
};
