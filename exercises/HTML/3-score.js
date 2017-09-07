var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;


  if(document===""){
    return grade;
  }

  if(!document.querySelector('meta[charset]') || !document.querySelector('meta[charset]').outerHTML.includes("UTF-8")) {
    grade.errors.push("You did not add the <meta> tag indicating the charset");
  } else {
    grade.score +=1;
    grade.successes.push("You added the <meta> tag");
  }
	if(document.title === ""){
	  	grade.errors.push("You did not add the <title> tag");
	} else {
	  grade.score +=1;
	  grade.successes.push("You added the <title> tag");
	}

	if($(document).find("body div").length === 0){
	  	grade.errors.push("You did not add the a div inside the body");
	} else {
	  grade.score +=0;
	  grade.successes.push("You did add the a div inside the body");
	}
  if($(document).find("body div#wrapper").length === 0){
	  	grade.errors.push("You did not add the div with id 'wrapper' inside the body");
	} else {
	  grade.score +=1;
	  grade.successes.push("You did add the div with id 'wrapper' inside the body");
	}
	if($(document).find("body div#wrapper a").length === 0){
	  	grade.errors.push("You did not add the link inside the div with id 'wrapper'");
	} else {
	  grade.score +=0;
	  grade.successes.push("You added the link");
	}
  if($(document).find("body a#mylink").length === 0){
	  	grade.errors.push("The link should have id 'mylink'");
	} else {
	  grade.score +=1;
	  grade.successes.push("You added the link with the right id");
	}
  if($(document).find("body div#wrapper a#mylink").length === 0 || !$(document).find("body a#mylink:first").attr("href").includes("w3.org")){
	  	grade.errors.push("The link should point to https://www.w3.org/");
	} else {
	  grade.score +=1;
	  grade.successes.push("The link points to https://www.w3.org/");
	}
  if($(document).find("body div#wrapper ul").length === 0){
	  	grade.errors.push("You did not add the list inside the div with id 'wrapper'");
	} else {
	  grade.score +=1;
	  grade.successes.push("You added the list");
	}
  if($(document).find("body div#wrapper ul#mylist").length === 0){
	  	grade.errors.push("The list should have id 'mylist'");
	} else {
	  grade.score +=1;
	  grade.successes.push("You added the list with the right id");
	}
  if($(document).find("body div#wrapper ul#mylist li").length !== 2){
	  	grade.errors.push("The list does not cotain two items");
	} else {
	  grade.score +=1;
	  grade.successes.push("The list contains two items");
	}
  if($(document).find("body div#wrapper ul#mylist li").length !== 2 || $($(document).find("body ul#mylist li")[0]).html() === "First item"){
	  	grade.errors.push("The first item of the list should contain 'First item'");
	} else {
	  grade.score +=1;
	  grade.successes.push("The first item of the list contains 'First item'");
	}
  if($(document).find("body div#wrapper ul#mylist li").length!==2 || $($(document).find("body ul#mylist li")[1]).html() === "Second item"){
	  	grade.errors.push("The second item of the list should contain 'Second item'");
	} else {
	  grade.score +=1;
	  grade.successes.push("The second item of the list contains 'Second item'");
	}

  return grade;
};
