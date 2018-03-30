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
      outputString += "<div class='badge badge-pill beep'><p class='start-text'>" + arrayItem + "</p></div>";
    } else if (arrayItem === "Boop!") {
      outputString += "<div class='badge badge-pill boop'><p class='start-text'>" + arrayItem + "</p></div>";
    } else if (arrayItem === "I'm sorry, Dave. I'm afraid I can't do that."){
      outputString += "<div class='badge badge-pill dave'><p class='start-text'>" + arrayItem + "</p></div>";
    } else {
      outputString += "<div class='badge badge-pill other'><p class='start-text'>" + arrayItem + "</p></div>";
    }
  });
  return outputString;
};

var classFinder = function(item) {
  if($(item).hasClass("beep")){
    return ".beep"; }
  else if($(item).hasClass("boop")) {
    return ".boop";
  }
  else if($(item).hasClass("dave")) {
    return ".dave";
  }
  else {
    return ".other";
  }
}

var changeBadgeText = function(target) {
  console.log(target);
  var currentText = $(target).parents(".badge").children(".start-text").text();
  var form = `<form class="badge-form` +  + `">
    <input class="change-text-input" type="text">
    <button type="submit" class="btn btn-light change-text">&#10004;</button>
    <button type="button" class="btn btn-light cancel">&#10008;</button>
  </form>`;
  $(target).parents(".badge").append(form);
  $(target).parents(".badge").children(".start-text").remove()

  $(".badge-form").submit(function(event){
    var newText = $(".change-text-input").val();
    if (newText === "") {
      newText = currentText;
    }
    $(badgeClass).text(newText);
    event.preventDefault();
  });

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

$(document).on("click",".start-text", function(){
  changeBadgeText(this);
});
