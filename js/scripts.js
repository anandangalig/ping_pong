//Back End Logic:
var calculate = function(index) {
  if (index % 15 ===0) {
    $("ul").append("<li>" + "PING-PONG!" + "</li>");
    $("img").show();
  } else if (index % 5 ===0) {
    $("ul").append("<li>" + "PONG!" + "</li>");
    $("img").show();
  } else if (index % 3 ===0) {
    $("ul").append("<li>" + "PING!" + "</li>");
    $("img").show();
  } else if (index % 3 !==0 || index % 5 !==0 || index % 15 !==0) {
    $("ul").append("<li>" + index + "</li>");
    $("img").show();
  }
};


//Front End Logic:
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $("ul").html("");
    $("img").hide();

    var inputArray = [];
    var input = parseInt($("#inputNumber").val());
    if (isNaN(input)) {
      $("ul").append("<li>" + "Please enter a number and try again!" + "</li>");
    };

    for (var index = 1; index <= input; index++) {
      inputArray.push(index);
      calculate(index);
    }
  });
});
