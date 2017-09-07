var score = function (result,variablesHash){
		var grade = {};
		grade.successes = [];
		grade.errors = [];
		grade.feedback = [];
		grade.score = 0;

		var ellipse = variablesHash["ellipse"];

		if(typeof ellipse !== "function"){
			grade.errors.push("The value returned in the variable 'ellipse' is not a function.");
			return grade;
		}
		grade.score += 1;

		//Testear la función.

		var _feedbackPI = false;

		//Case: a,b numbers
		try {
			var testA = ellipse(0,0);
			var testB = ellipse(1,1);
			var testC = ellipse(2,5);
			if((testA===0)&&(testB===Math.PI)&&(testC===10*Math.PI)){
				grade.score += 2;
				grade.successes.push("The' ellipse' function works correctly when' a' and' b' are numbers.");
			} else {
				grade.errors.push("The ellipse function does not correctly calculate the expected value when' a' and' b' are numbers.");
				if(Math.abs(testB-Math.PI) < 0.1){
					grade.score += 1;
					grade.feedback.push("Some calculated values are quite close to the expected one without being exact. Remember that the PI value can be obtained by using the JavaScript Math module in the following way:\"Math. PI\"");
					_feedbackPI = true;
				}
			}
		} catch (e1){
			grade.errors.push("The' ellipse' function presents execution errors when' a' and' b' are numbers.");
		}

		if(grade.errors.length > 0){
			return grade;
		}

		//Case: a, array
		try {
			var testD = ellipse([0,0]);
			var testE = ellipse([1,1]);
			var testF = ellipse([2,5]);
			if((testD===0)&&(testE===Math.PI)&&(testF===10*Math.PI)){
				grade.score += 2;
				grade.successes.push("The' ellipse' function works correctly when' a' is an array.");
			} else {
				grade.errors.push("The' ellipse' function does not correctly calculate the expected value when' a' is an array.");
				if(Math.abs(testE-Math.PI) < 0.1){
					grade.score += 1;
					if(!_feedbackPI){
						grade.feedback.push("Some calculated values are quite close to the expected one without being exact. Remember that the PI value can be obtained by using the JavaScript Math module in the following way:'Math. PI'.");
						_feedbackPI= true;
					}
				}
			}
		} catch (e2){
			grade.errors.push("The' ellipse' function presents execution errors when' a' is an array.");
		}

		if(grade.errors.length > 0){
			return grade;
		}


		//Si la función recibe como parámetro un objeto que no sea un array devolverá -1.
		try {
			if((ellipse({})===-1)&&(ellipse(new Date())===-1)){
				grade.score += 2;
				grade.successes.push("The' ellipse' function works correctly when' a' is a different object from an array.");
			} else {
				grade.errors.push("The' ellipse' function does not work properly when' a' is an object other than an array.");
			}
		} catch (e2){
			grade.errors.push("The' ellipse' function presents execution errors when' a' is a different object from an array.");
		}

		//Si la función recibe como parámetro un array que no contenga los valores adecuados devolverá -2.
		try {
			if((ellipse([])===-2)&&(ellipse([5,"test"])===-2)&&(ellipse([undefined,5])===-2)){
				grade.score += 1;
				grade.successes.push("The' ellipse' function works correctly when' a' is an invalid array.");
			} else {
				grade.errors.push("The' ellipse' function does not work properly when' a' is an invalid array.");
			}

			if(ellipse([-1,-1])===-2){
				grade.score += 1;
			} else {
				grade.feedback.push("An array containing negative numbers is also considered an invalid array.");
			}

		} catch (e2){
			grade.errors.push("The' ellipse' function presents execution errors when' a' is an invalid array.");
		}

		// En cualquier otro caso en que la función reciba parámetros erroneos deberá devolver el valor -3.
		try {
			if((ellipse()===-3)&&(ellipse(5)===-3)&&(ellipse(5,null)===-3)&&(ellipse(undefined,5)===-3)&&(ellipse("perro",10)===-3)){
				grade.score += 1;
				grade.successes.push("The ellipse function works correctly when it receives invalid parameters.");
			} else {
				grade.errors.push("The ellipse function does not work properly when it receives invalid parameters.");
			}

			if(ellipse(-1,-1)===-3){
				grade.score += 1;
			} else {
				grade.feedback.push("Values a and b should always be positive. Otherwise, invalid parameters should be considered.");
			}

		} catch (e2){
			grade.errors.push("The ellipse function has execution errors when it receives invalid parameters.");
		}

		//Scale grade
		grade.score = Math.min(10,Math.max(0,grade.score));

		//Passed threshold: 8
		if(grade.score < 8){
			grade.score = 4;
		}

		if(grade.score===10){
			grade.feedback.push("Congratulations, your solution is perfect!");
		}

		return grade;
	}
