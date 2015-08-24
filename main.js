var translator = (function(){


return {
  getUserInput: function (userInput) {
    var userInput = $("#englishGreeting").val();
    var userString = userInput.split(" ");
    var translateOption = $("[name = 'language']");
    for (var i = 0; i < translateOption.length; i++) {
      var lang = translateOption[i];
      if (lang.checked && lang.value === 'russian') {
        var translation = christmasTranslator.translateToRussian(userString);
        $("#christmas").text(translation.reduce(function(a, b) {
          return a + " " + b;
        }));
      } else if (lang.checked && lang.value === 'spanish') {
        var translation = christmasTranslator.translateToSpanish(userString);
        $("#christmas").text(translation.reduce(function(a, b) {
          return a + " " + b;
        }));
      }
    }
    return userString;
  }
}

})();

$("#translate").on("click", getUserInput);