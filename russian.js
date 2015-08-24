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

    translator.translateToRussian = function(greeting) {
      var translatedGreeting = [];
      greeting.forEach(function(word){
        translatedGreeting.push(russian[word]);
      })
      return translatedGreeting;
  };
  return translator;
})(translator);