var beeper = function(input) {
  return false;
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
