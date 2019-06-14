//----------------Back End Logic -----------//
function numberToOutput(input) {
  var result = [];
  for (var i = 1; i <= input; i++) {

  //   if (i % 3 == 0) {
  //     result.push("I'm sorry, Dave. I'm afraid I can't do that.");
  //   }
  //   else if (i.toString().match(/0/)) {
  //     result.push("Beep!")
  //   }
  //   else if (i.toString().match(/1/)) {
  //     result.push("Boop!")
  //   }else {
  //    result.push(i)
  //   }
  // }
  // return result;
}
}

//------------- Front End Logic ---------//
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
   var number = parseInt($("#number").val());
   var result = numberToOutput(input);
   $("#result").text(result);
 });
});
