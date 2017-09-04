var score = function(document){
  var grade = {};
  grade.score = 0;
  grade.successes = [];
  grade.errors = [];
  grade.feedback = [];

  //Content
  var content;
  if((typeof document != "undefined")&&(typeof document.documentElement != "undefined")){
    content = document.documentElement.outerHTML;
  }

  //Existencia de elementos del DOM.
  //Existencia de elementos del DOM.
	if($(document).find("input#screen").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'screen' could not be found.");
	}
	if($(document).find("button#add").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'add' could not be found.");
	}
	if($(document).find("button#equals").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'equals' could not be found.");
	}

	if($(document).find("div#counter").length === 0){
	  	return returnWithError(document,content,grade,"<div> with id 'counter' could not be found.");
	}
	if(parseInt($(document).find("div#counter").html()) != 0){
	  	return returnWithError(document,content,grade,"Counter should have a initial value of 0.");
	}

  var screen = $(document).find("input#screen");
  $(screen).trigger("click");
  $(screen).val(5);
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val(2);
  $(document).find("#equals").trigger("click");

  if(parseFloat($(screen).val()) != 7){
    return returnWithError(document,content,grade,"Add funtion does not work as expected.");
  }

  $(screen).trigger("click");
  $(screen).val(3);
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val(7);
  $(document).find("#equals").trigger("click");

  if(parseFloat($(screen).val()) != 10){
    return returnWithError(document,content,grade,"Add funtion does not work as expected.");
  }

  //Trigger error
  $(screen).trigger("click");
  $(screen).val("Gato");
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val("Perro");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a string instead of a number.");
  }

  if(parseInt($(document).find("div#counter").html()) != 1){
	  return returnWithError(document,content,grade,"Counter should have a  value of 1 after the first Error.");
	}

	var errorsToTrigger = 5;
	for(var i=0; i<errorsToTrigger; i++){
  	//Trigger error
    $(screen).trigger("click");
    $(screen).val("Gato");
    $(document).find("#add").trigger("click");
    $(screen).trigger("click");
    $(screen).val("Perro");
    $(document).find("#equals").trigger("click");
	}

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a string instead of a number.");
  }

  if(parseInt($(document).find("div#counter").html()) != (errorsToTrigger+1)){
	  return returnWithError(document,content,grade,"Counter does not count Errors.");
	}

	if(!$(screen).hasClass("error")){
    return returnWithError(document,content,grade,"Screen should have class 'error' and show the text \"Error\".");
  }

  $(screen).trigger("click");
  $(screen).val(3);
  if($(screen).hasClass("error")){
    return returnWithError(document,content,grade,"Screen should only have class 'error' when showing the \"Error\" in each moment.");
  }
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val(7);
  $(document).find("#equals").trigger("click");

  if(parseFloat($(screen).val()) != 10){
    return returnWithError(document,content,grade,"Add function does not work after an error");
  }

  if($(screen).hasClass("error")){
    return returnWithError(document,content,grade,"Screen should only have class 'error' when showing the \"Error\" in each moment.");
  }

  grade.score = 10;
  grade.successes.push("Correcto.");

  resetState(document,content);
  return grade;
};

var returnWithError = function(document,content,grade,msg){
  resetState(document,content);
  grade.errors.push(msg);
  return grade;
};

var resetState = function(document,content){
  if((typeof document != "undefined")&&(typeof document.documentElement != "undefined")&&(typeof content != "undefined")){
	  document.open();
	  document.writeln(content);
	  document.close();
  }
};
