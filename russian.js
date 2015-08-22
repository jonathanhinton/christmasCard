var greeting = ["merry christmas", "happy new year"];
var christmasTranslator = (function(){
  var russian = {
    "merry christmas" : "С Рождеством",
    "happy new year" : "с Новым Годом",
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
    translateToRussian: function() {
      return russian;
    }

  };
}());

console.log(christmasTranslator.getRussian());


//lexicon
// ENGLISH to Russian TO INCLUDE:
// "merry christmas" : "С Рождеством",
// "happy new year" : "с Новым Годом",
// "seasons" : "сезоны",
// "greetings" : "приветствия",
// "holidays" : "каникулы",
// "yuletide" : "святки",
// "white" : "белый",
// "winter" : "зима",
// "snow" : "снег",
// "jingle" : "звон",
// "bells" : "колокола",
// "dreaming" : "сновидение",
// "hope" : "надеяться",
// "joy" : "радость",
// "peace" : "мир",
// "on" : "на",
// "earth" : "земля",
// "goodwill" : "доброжелательность",
// "toward" : "к",
// "men" : "люди"
// "and" : "и"
//
// ENGLISH to GEORGIAN
// "merry christmas" : "მხიარულ საშობაო",
// "happy new year" : "ბედნიერი ახალი წელი",
// "happy" : "ბედნიერი",
// "holidays" : "დღესასწაულები",
// "hope" : "იმედი",
// "joy" : "სიხარული",
// "peace" : "მშვიდობა",
// "on" : "-ზე",
// "earth" : "დედამიწა",
// "goodwill" : "გუდვილი",
// "toward" : "მიმართულებით",
// "men" : "მამაკაცი"
// "and" : "და"