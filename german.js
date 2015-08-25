var translator = (function(translator){
  var german = {
    "merry" : "Frohe",
    "christmas" : "Weihnachten",
    "happy" : "Frohes",
    "new" : "neues",
    "year" : "Jahr",
    "seasons" : "die Grüße der",
    "greetings" : "Jahreszeit",
    "holidays" : "Ferien",
    "hope" : "Hoffnung",
    "joy" : "Freude",
    "peace" : "Frieden",
    "on" : "auf",
    "earth" : "Erden",
    "goodwill" : "Geschäfts- oder",
    "toward" : "Firmenwert in Richtung",
    "men" : "Männer",
    "and" : "und"
  }

  translator.translateToGerman = function (userInputArray) {
    console.log("translating to german");
    var translatedGreetingArray = [];
    userInputArray.forEach(function(word){
      translatedGreetingArray.push(german[word]);
    })
    var text2speech = translatedGreetingArray.join(" ");
    $("#translateButton").on("click", responsiveVoice.speak(text2speech, "Deutsch Female"));
    return translatedGreetingArray;
  };
  return translator;
})(translator);