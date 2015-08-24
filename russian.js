var translator = (function(translator){
  var russian = {
    "merry" : "С",
    "christmas" : "Рождеством",
    "happy" : "С",
    "new" : "Новым",
    "year" : "Годом",
    "seasons" : "сезоны",
    "greetings" : "приветствия",
    "holidays" : "каникулы",
    "hope" : "надеяться",
    "joy" : "радость",
    "peace" : "мир",
    "on" : "на",
    "earth" : "земля",
    "goodwill" : "доброжелательность",
    "toward" : "к",
    "men" : "люди",
    "and" : "и"
  }

  translator.translateToRussian = function (userInputArray) {
    console.log("translating to russian");
    var translatedGreetingArray = [];
    userInputArray.forEach(function(word){
      translatedGreetingArray.push(russian[word]);
    })
    return translatedGreetingArray;
  };
  return translator;
})(translator);