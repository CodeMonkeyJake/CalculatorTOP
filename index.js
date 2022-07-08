let addition = function(num1 ,num2) {
    return num1 + num2;
}

  let subtraction = function(num1 , num2 ) {
    return num1 - num2;
}

    let multiply = function(num1, num2 ) {
        return num1 * num2;
}

      let division = function(num1, num2) {
        return num1 / num2;
      }


      let operate = function(operator,num1,num2) {
        if (operator === "+") {
            return addition(num1,num2);
        }

         if (operator === "-") {
            return subtraction(num1,num2) 
        }

        if (operator === "*" ) {

            return multiply(num1,num2);
        }

      if (operator === "/") {
        return division(num1,num2);
      }


      }