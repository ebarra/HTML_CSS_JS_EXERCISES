var score = function(document){
  var grade = {};
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];
  grade.score = 0;

  //Replace content
  if((typeof document != "undefined")&&(typeof document.documentElement != "undefined")){
    var bodyContent = '<div class="calculator keyboard"> Number: <input type="text" id="screen"> <button id="add" operation="true">+</button> <button id="equals">=</button> <input id="test6" operation="true" style="display:none"> </div> <div id="test1" class="calculator" style="display:none"> <input> <button>b</button> <button operation="true">op</button> </div> <div id="test2" class="keyboard" style="display:none"> <input> <button>b</button> <button operation="true">op</button> </div> <article id="test3" class="calculator keyboard" style="display:none"> <input> <button>b</button> <button operation="true">op</button> </article> <div id="test4" class="error" style="display:none"> <input type="text"> <input type="number"> <div type="text"></div> </div> <article id="test5" class="error" style="display:none"> <input type="text"> <input type="number"> <div type="text"></div> </article> <script type="text/javascript"> var acc = 0; var op; $(document).ready(function(){ $("#screen").click(function(){ $(this).val(""); }); $("#add").click(function(){ acc = parseFloat($("#screen").val()); op = "+"; }); $("#equals").click(function(){ var n = parseFloat($("#screen").val()); if(op === "+"){ acc += n; } else { acc = n; } $("#screen").val(acc); acc = 0; op = undefined; }); }); </script>';
    $(document).find("body").html(bodyContent);

    //Restore events
    $(document).find("#screen").click(function(){
			$(this).val("");
		});
		$(document).find("#add").click(function(){
			acc = parseFloat($(document).find("#screen").val());
			op = "+";
		});
		$(document).find("#equals").click(function(){
			var n = parseFloat($(document).find("#screen").val());
			if(op === "+"){
				acc += n;
			} else {
				acc = n;
			}
			$(document).find("#screen").val(acc);
			acc = 0;
			op = undefined;
		});
  }

  //Tests
	if($(document).find("#screen").css("background-color") != "rgb(0, 0, 0)"){
	  	grade.errors.push("Calculator screen should have background black.");
	  	return grade;
	}
	if($(document).find("#screen").css("color") != "rgb(255, 255, 255)"){
	  	grade.errors.push("screen should show text in white color.");
	  	return grade;
	}

	if($(document).find("input").not("#screen").css("background-color") == "rgb(0, 0, 0)"){
	  	grade.errors.push("Only screen <input> should be black.");
	  	return grade;
	}

	if($(document).find("input").not("#screen").css("color") == "rgb(255, 255, 255)"){
	  grade.errors.push("Only screen <input> should have white text.");
	  return grade;
	}

	if($(document).find("div.calculator.keyboard button").css("background-color") != "rgb(0, 0, 0)"){
	  	grade.errors.push("All buttons inside <div class=\"calculator keyboard\">  should have black background.");
	  	return grade;
	}

	if($(document).find("div.calculator.keyboard button").css("color") != "rgb(255, 255, 255)"){
	  	grade.errors.push("All buttons inside <div class=\"calculator keyboard\"> should have white font.");
	  	return grade;
	}
	if($(document).find("div.calculator.keyboard button[operation='true']").css("border-top-color") != "rgb(0, 0, 255)"){
	  	grade.errors.push("All buttons inside <div class=\"calculator keyboard\"> with attribute \"operation\" equals \"true\" should have blue border.");
	  	return grade;
	}

	//Check CSS double class selector
	if($(document).find("div#test2.keyboard button").css("background-color") == "rgb(0, 0, 0)"){
	  	grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("div#test2.keyboard button").css("color") == "rgb(255, 255, 255)"){
	  	grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("div#test2.keyboard button[operation='true']").css("border-top-color") == "rgb(0, 0, 255)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\">  with attribute 'operation' is not right.");
	  	return grade;
	}

	if($(document).find("div#test1.calculator button").css("background-color") == "rgb(0, 0, 0)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("div#test1.calculator button").css("color") == "rgb(255, 255, 255)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("div#test1.calculator button[operation='true']").css("border-top-color") == "rgb(0, 0, 255)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}

	if($(document).find("article#test3.calculator.keyboard button").css("background-color") == "rgb(0, 0, 0)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("article#test3.calculator.keyboard button").css("color") == "rgb(255, 255, 255)"){
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\"> is not right.");
	  	return grade;
	}
	if($(document).find("article#test3.calculator.keyboard button[operation='true']").css("color") == "rgb(0, 0, 255)"){
    grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\">  with attribute 'operation' is not right.");
	  	return grade;
	}

	if($(document).find("div.calculator.keyboard button[operation!='true']").css("border-top-color") == "rgb(0, 0, 255)"){
    grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\">  with attribute 'operation' is not right.");
	  	return grade;
	}
	if($(document).find("div.calculator.keyboard input#test6[operation='true']").css("border-top-color") == "rgb(0, 0, 255)"){
      grade.feedback.push();
      grade.errors.push("The CSS selector to apply the style to all buttons inside <div class=\"calculator keyboard\">  with attribute 'operation' is not right.");
	  	return grade;
	}

	if($(document).find("div input[type='text']").css("border-top-color") == "rgb(255, 0, 0)"){
	  	grade.errors.push("Inputs should only have a red border if their containing <div> has class \"error\".");
	  	return grade;
	}

	if($(document).find("div#test4.error input[type='text']").css("border-top-color") != "rgb(255, 0, 0)"){
    grade.errors.push("Inputs should only have a red border if their containing <div> has class \"error\".");
	  	return grade;
	}

	if($(document).find("article#test5.error input[type='text']").css("border-top-color") == "rgb(255, 0, 0)"){
    grade.errors.push("Inputs should only have a red border if their containing <div> has class \"error\".");
	  	return grade;
	}

	if($(document).find("div#test4.error input[type!='text']").css("border-top-color") == "rgb(255, 0, 0)"){
    grade.errors.push("Inputs should only have a red border if their are text type");
	  	return grade;
	}

	if($(document).find("div#test4.error div[type='text']").css("border-top-color") == "rgb(255, 0, 0)"){
    grade.errors.push("Only inputs and no other elements should only have a red border if their containing <div> has class \"error\".");
	  	return grade;
	}

  grade.score = 10;
  grade.successes.push("Right.");

  return grade;
};
