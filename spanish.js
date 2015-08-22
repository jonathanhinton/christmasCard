// var testGreetings = ["merry", "christmas"];

var christmasTranslator =(function(bravo){
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
	}

		bravo.translateToSpanish = function(greeting){
			var translatedGreeting = [];
			greeting.forEach(function(word){
				translatedGreeting.push(spanish[word]);
			})
			return translatedGreeting;
		};
	return bravo;
})(christmasTranslator);

// console.log(christmasTranslator.translateToSpanish(testGreetings));
