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
    var stringBegin = "<div class='badge badge-pill ";
    var stringEnd = "'><p class='pill-text'>";
    if (arrayItem === "Beep!") {
      outputString += stringBegin + "beep" + stringEnd + arrayItem + "</p></div>";
    } else if (arrayItem === "Boop!") {
      outputString += stringBegin + "boop" + stringEnd + arrayItem + "</p></div>";
    } else if (arrayItem === "I'm sorry, Dave. I'm afraid I can't do that."){
      outputString += stringBegin + "dave" + stringEnd + arrayItem + "</p></div>";
    } else {
      outputString += stringBegin + "other" + stringEnd + arrayItem + "</p></div>";
    }
  });
  return outputString;
};

var classFinder = function(item) {
  if($(item).hasClass("beep")){
    return "beep"; }
  else if($(item).hasClass("boop")) {
    return "boop";
  }
  else if($(item).hasClass("dave")) {
    return "dave";
  }
  else {
    return "other";
  }
}

var smallButtonAction = function(target, fillText){
  var badgeClass = "." + classFinder(target);
  $(badgeClass).html("<p class='pill-text'>" + fillText + "</p>");
}

var changeBadgeText = function(target) {
  var clickClass = classFinder($(target).parents(".badge"));
  var currentText = $(target).parents(".badge").children(".pill-text").text();
  var form = `<form class="badge-form `+ clickClass +`">
    <input class="change-text-input" type="text">
    <button type="submit" class="btn btn-light change-text">&#10004;</button>
    <button type="button" class="btn btn-light cancel">&#10008;</button>
  </form>`;
  $(target).parents(".badge").append(form);
  $(target).parents(".badge").children(".pill-text").remove();
  $(".badge-form").submit(function(event){
    var newText = $(".change-text-input").val();
    if (newText === "") {
      newText = currentText;
    }
    smallButtonAction(this, newText);
    event.preventDefault();
  });
  $(".cancel").click(function(event){
    smallButtonAction($(this).parents(".badge"), currentText);
    event.preventDefault();
  });
};

$(document).ready(function() {
  $("#input-form").submit(function(event) {
    var input = parseInt($("#input").val());
    var output = beeper(input);
    $("#result").empty();
    $("#result").append("<p>Click the pills to change their values</p>");
    $("#result").append(colorPillMaker(output));
    $("#result").show();
    $("#input-form")[0].reset();
    event.preventDefault();
  });
});

$(document).on("click",".pill-text", function(){
  changeBadgeText(this);
});
