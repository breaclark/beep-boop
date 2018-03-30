var beeper = function(input) {
  var output = [];
  for(var index = 0; index <= input; index ++){
    if (index % 3 == 0 && index !== 0) {
      output.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (index.toString().includes("1")) {
      output.push("Boop!");
    } else if (index.toString().includes("0")) {
      output.push("Beep!");
    } else {
      output.push(index);
    }
  }
  return output;
};



//Interface logic below here
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    var input = parseInt($("#input").val());
    var output = beeper(input);
    $("#result").empty();
    $("#result").text(output);
    $("#result").show();
    $("#input-form")[0].reset();
    event.preventDefault();
  });
});
