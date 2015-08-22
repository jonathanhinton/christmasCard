var testGreetings = ["merry", "christmas"];
var translatedGreeting = [];

var christmasTranslator =(function(){
	var spanish = {
		"merry": "alegre",
		"christmas": "navidad",
		"happy": "feliz",
		"new": "nuevo",
		"year": "año",
		"seasons": "estaciones",
		"greetings": "saludos",
		"holidays": "vacaciones",
		"hope": "esperanza",
		"joy": "alegría",
		"peace": "paz",
		"on": "en",
		"earth": "tierra",
		"goodwill": "buena voluntad",
		"toward": "hacia",
		"men": "hombres",
		"and": "y"
*/
	}
	return {
		translateToSpanish: function(greeting){
			greeting.forEach(function(word){
				translatedGreeting.push(spanish[word]);
		})
			return translatedGreeting;
	}
};
})();

console.log(christmasTranslator.translateToSpanish(testGreetings));
