var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;

	if($(document).find("header.myheader").length === 0){
	  	grade.errors.push("You did not change the div with class myheader");
	} else {
	  grade.score +=1;
	  grade.successes.push("You changed the div with class myheader");
	}
  if($(document).find("nav.mynavbar").length === 0){
	  	grade.errors.push("You did not change the div with class mynavbar");
	} else {
	  grade.score +=1;
	  grade.successes.push("You changed the div with class mynavbar");
	}
  if($(document).find("section.allposts").length === 0){
	  	grade.errors.push("You did not change the div with class allposts");
	} else {
	  grade.score +=2;
	  grade.successes.push("You changed the div with class allposts");
	}
  if($(document).find("article.post").length === 0){
	  	grade.errors.push("You did not change the div with class post");
	} else {
	  grade.score +=2;
	  grade.successes.push("You changed the div with class myheader");
	}
  if($(document).find("header.mypostheader").length === 0){
	  	grade.errors.push("You did not change the div with class mypostheader");
	} else {
	  grade.score +=2;
	  grade.successes.push("You changed the div with class mypostheader");
	}
  if($(document).find("footer.mypagefooter").length === 0){
	  	grade.errors.push("You did not change the div with class mypagefooter");
	} else {
	  grade.score +=2;
	  grade.successes.push("You changed the div with class mypagefooter");
	}


  return grade;
};
