



//Interface logic below here
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    var input = parseInt($("#input").val());
    var output;
    $("#result").empty();
    $("#result").append(output);
    event.preventDefault();
  });
});
