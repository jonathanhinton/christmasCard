

function getUserInput(userInput) {
  var userInput = document.getElementById("englishGreeting").value;
  console.log(userInput);
  var userString = userInput.split(" ");

  var translateOption = $("[name = 'language']");
  for (var i = 0; i < translateOption.length; i++) {
    var lang = translateOption[i];
    // console.log(lang);
    if (lang.checked && lang.value === 'russian') {
      var translation = christmasTranslator.translateToRussian(userString);
      console.log(translation);
      $("#christmas").append(translation.reduce(function(a, b) {
        return a + " " + b;
      }));
      console.log("russian");
    } else if (lang.checked && lang.value === 'spanish') {
      console.log("spanish");
    }
  }
  // return userString;
}

$("#translate").on("click", getUserInput);
