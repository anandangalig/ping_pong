$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    var inputArray = [];

    for (var index = 1; index <= input; index++) {
      inputArray.push(index);
    }


    inputArray.forEach(function(currentInteger) {
      if (currentInteger % 15 ===0) {
        $("ul").append("<li>" + "PING-PONG!" + "</li>");
        $("img").show();
      } else if (currentInteger % 5 ===0) {
        $("ul").append("<li>" + "PONG!" + "</li>");
        $("img").show();
      } else if (currentInteger % 3 ===0) {
        $("ul").append("<li>" + "PING!" + "</li>");
        $("img").show();
      } else if (currentInteger % 3 !==0 || currentInteger % 5 !==0 || currentInteger % 15 !==0) {
        $("ul").append("<li>" + currentInteger + "</li>");
        $("img").show();
      } else {
        $("ul").append("<li>" + "Please enter a number and try again!" + "</li>");
      }
    })
  });
});
