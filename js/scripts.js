//----------------Back End Logic -----------//
function numberToOutput(number) {
  var result = [];
  for (var i = 0; i <= number; i++) {


    if (i.toString().match(/1/)) {
       result.push("Beep!")
   } else if (i.toString().match(0)) {
     result.push(i)
  }  else if (i.toString().match(/2/)) {
     result.push("Boop!")
   } else if (i % 3 === 0) {
     result.push("I'm sorry, Dave. I'm afraid I can't do that.");
   } else {
    result.push(i)
   }
 }
 return result;
}



//------------- Front End Logic ---------//
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
   var number = parseInt($("#number").val());
   var result = numberToOutput(number);
   $("#result").text(result);
 });
});
