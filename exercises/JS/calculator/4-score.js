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

  //Check DOM.
	if($(document).find("input#screen").length === 0){
	  	return returnWithError(document,content,grade,"Could not find <input> with id 'screen'.");
	}
	if($(document).find("button#add").length === 0){
	  	return returnWithError(document,content,grade,"Could not find <button> with id 'add'.");
	}
	if($(document).find("button#equals").length === 0){
	  	return returnWithError(document,content,grade,"Could not find <button> with id 'equals'.");
	}

  var screen = $(document).find("input#screen");
  $(screen).trigger("click");
  $(screen).val(5);
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val(2);
  $(document).find("#equals").trigger("click");

  if(parseFloat($(screen).val()) != 7){
    return returnWithError(document,content,grade,"Add function does not work as expected. Check it.");
  }

  $(screen).trigger("click");
  $(screen).val(3);
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val(7);
  $(document).find("#equals").trigger("click");

  if(parseFloat($(screen).val()) != 10){
    return returnWithError(document,content,grade,"Add function does not work as expected. Check it.");
  }

  $(screen).trigger("click");
  $(screen).val("Gato");
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val("Perro");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a text instead of a number");
  }

  $(screen).trigger("click");
  $(screen).val("Gato");
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val("2");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a text instead of a number");
  }

  $(screen).trigger("click");
  $(screen).val("2");
  $(document).find("#add").trigger("click");
  $(screen).trigger("click");
  $(screen).val("Perro");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a text instead of a number");
  }

  grade.score = 10;
  grade.successes.push("Right.");

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
