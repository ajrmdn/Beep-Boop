function numberToOutput(string) {
  var result = [];
  for (var i = 1; i <= input; i++) {

    if (i % 3 == 0) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else if (i.toString().match(/0/)) {
      result.push("Beep!")
    }
    else if (i.toString().match(/1/)) {
      result.push("Boop!")
    }else {
     result.push(i)
    }
  }
}

//------------- Front End Logic ---------//
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
   var number = parseInt($("input#number").val());
   var result = numberToOutput(string);
   $("#result").text(result);
 });
});
