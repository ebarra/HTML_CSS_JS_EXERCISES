/*In the next page change the CSS styles performing the following changes:
- All three boxes should have a minimum height of 80px, use the class "box" and the property min-height to achieve this
- Change the background color of the first box to #ff704d
- Change the width of the second box to 300px
- Change the color of the paragraph inside the second box to #d86a80
- Use the property font-size to change the font size of the h1 element to 48px
*/
var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;


  if($(document).find(".box").css("min-height") != "80px"){
    grade.errors.push("Elements with class 'box' should have a min-height of 80px.");
  } else {
	  grade.score +=2;
	  grade.successes.push("Elements with class 'box' have a min-height of 80px.");
	}

  if($(document).find("#box1").css("background-color") != "#ff704d" && $(document).find("#box1").css("background-color") != "rgb(255, 112, 77)"){
    grade.errors.push("First box should have a background-color #ff704d");
  } else {
	  grade.score +=2;
	  grade.successes.push("First box has a background-color #ff704d");
	}

  if($(document).find("#box2").css("width") != "300px"){
    grade.errors.push("Second box should have a width 300px");
  } else {
	  grade.score +=2;
	  grade.successes.push("Second box has a width 300px");
	}

  if($(document).find("#box2 p").css("color") != "#d86a80" && $(document).find("#box2 p").css("color") != "rgb(216, 106, 128)"){
    grade.errors.push("The paragraph inside the second box should have a font color #d86a80");
  } else {
	  grade.score +=2;
	  grade.successes.push("The paragraph inside the second box has a font color #d86a80");
	}

  if($(document).find("h1").css("font-size") != "48px"){
    grade.errors.push("The h1 should have a font size of 48px");
  } else {
	  grade.score +=2;
	  grade.successes.push("The h1 has a font size of 48px");
	}

  return grade;
};
