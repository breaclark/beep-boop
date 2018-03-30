var beeper = function(input) {
  var output = [];
  for(var index = 0; index <= input; index ++){
    output.push(index);
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
    event.preventDefault();
  });
});
