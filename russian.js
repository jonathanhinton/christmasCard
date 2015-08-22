var greeting = ["merry", "christmas", "happy", "new", "year"];
var translatedGreeting = [];
var christmasTranslator = (function(){
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
  };

  return {
    translateToRussian: function(greeting) {
      greeting.forEach(function(word){
        translatedGreeting.push(russian[word]);
      })
      return translatedGreeting;
    }

  };
}());

console.log(christmasTranslator.translateToRussian(greeting));
