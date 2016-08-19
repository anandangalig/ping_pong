$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    var inputArray = [];

    for (var index = 1; index <= input; index++) {
      inputArray.push(index);
    }

    inputArray.forEach(function(currentInteger) {
      if (currentValue === NaN) {
        alert ("Please enter a number and try again!")
      }
    })
    console.log(currentInteger);

  });
});
