//Business logic here
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
var colorPillMaker = function(input) {
  var outputString = ""
  input.forEach(function(arrayItem){
    if (arrayItem === "Beep!") {
      outputString += "<div class='badge badge-pill beep'>" + arrayItem + "</div>";
    } else if (arrayItem === "Boop!") {
      outputString += "<div class='badge badge-pill boop'>" + arrayItem + "</div>";
    } else if (arrayItem === "I'm sorry, Dave. I'm afraid I can't do that."){
      outputString += "<div class='badge badge-pill dave'>" + arrayItem + "</div>";
    } else {
      outputString += "<div class='badge badge-pill other'>" + arrayItem + "</div>";
    }
  });
  return outputString;
};

var changeBadgeText = function(badge, target) {
  console.log(badge);
  var currentText = $(target).text();
  var form = `<form class="badge-form">
    <input id="input" type="text">
    <button type="button" class="btn btn-light">&#10004;</button>
    <button type="button" class="btn btn-light">&#10008;</button>
  </form>`;
  $(target).html(form);
};


$(document).ready(function() {
  $("#input-form").submit(function(event) {
    var input = parseInt($("#input").val());
    var output = beeper(input);
    $("#result").empty();
    $("#result").html(colorPillMaker(output));
    $("#result").show();
    $("#input-form")[0].reset();
    event.preventDefault();
  });

});

$(document).on("click",".beep", function(){
  changeBadgeText(".beep",this);
});

$(document).on("click",".boop", function(){
  changeBadgeText(".boop",this);
});

$(document).on("click",".dave", function(){
  changeBadgeText(".dave",this);
});
