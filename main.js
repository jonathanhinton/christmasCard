var translator = (function(){


return {
  translate: function () {
    var userInput = $("#englishGreeting").val().toLowerCase();
    var userInputArray = userInput.split(" ");
    console.log(userInputArray);
    var language = $("#languages").val();
    console.log(language);
      if (language === 'russian') {
        console.log("russian selected");
        var translation = translator.translateToRussian(userInputArray);
        $("#translation-output").text(translation.join(" "));
      } else if (language === 'spanish') {
        console.log("spanish selected");
        var translation = translator.translateToSpanish(userInputArray);
        $("#translation-output").text(translation.join(" "));
      } else if (language === 'french') {
        console.log("french selected");
        var translation = translator.translateToFrench(userInputArray);
      } else if (language === 'german') {
        console.log("german selected");
        var translation = translator.translateToGerman(userInputArray);
        $("#translation-output").text(translation.join(" "));
      }
      return translation
    }
  }
})();

$("#translateButton").on("click", translator.translate);