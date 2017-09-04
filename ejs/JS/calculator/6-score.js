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
	if($(document).find("input#screen").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'screen' could not be found.");
	}
	if($(document).find("button#add").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'add' could not be found.");
	}
	if($(document).find("button#equals").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'equals' could not be found.");
	}
	if($(document).find("button#fbx").length === 0){
	  	return returnWithError(document,content,grade,"<input> with id 'fbx' could not be found.");
	}

	if($(document).find("button#fbx").html().toLowerCase().trim() != "f(b,x)"){
	  	return returnWithError(document,content,grade,"<button> with id 'multiplication' should have text \"f(b,x)\".");
	}

  var screen = $(document).find("input#screen");
  $(screen).trigger("click");
  $(screen).val(2);
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val(8);
  $(document).find("#equals").trigger("click");

  if(Math.abs(3-parseFloat($(screen).val())) > 0.1){
    return returnWithError(document,content,grade,"Function f(b,x) does not work as expected.");
  }

  $(screen).trigger("click");
  $(screen).val(5);
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val(625);
  $(document).find("#equals").trigger("click");

  if(Math.abs(4-parseFloat($(screen).val())) > 0.1){
    return returnWithError(document,content,grade,"Function f(b,x) does not work as expected.");
  }

  $(screen).trigger("click");
  $(screen).val("Gato");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("2");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a string instead of a number.");
  }

  $(screen).trigger("click");
  $(screen).val("2");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("Perro");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when any of the arguments is a string instead of a number.");
  }

  //B natural negativo
  $(screen).trigger("click");
  $(screen).val("-2");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("125");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when argument b is negative");
  }

  //B=1
  $(screen).trigger("click");
  $(screen).val("1");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("125");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when argument b is below 1");
  }

  //B decimal
  $(screen).trigger("click");
  $(screen).val("2.5");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("125");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when argument b is not natural");
  }

  //X negativo
  $(screen).trigger("click");
  $(screen).val("3");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("-125");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when argument 'x' is not a positive real number");
  }

  //X decimal positivo
  $(screen).trigger("click");
  $(screen).val("3");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("125.5");
  $(document).find("#equals").trigger("click");

  if($(screen).val() == "Error"){
    return returnWithError(document,content,grade,"Calculator should not show \"Error\" when argument 'x' is a positive real number.");
  }

  //X=0
  $(screen).trigger("click");
  $(screen).val("3");
  $(document).find("button#fbx").trigger("click");
  $(screen).trigger("click");
  $(screen).val("0");
  $(document).find("#equals").trigger("click");

  if($(screen).val() != "Error"){
    return returnWithError(document,content,grade,"Calculator should show \"Error\" when argument 'x' is 0");
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
