var translator = (function(translator){
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

	translator.translateToSpanish = function (userInputArray) {
		console.log("translating to spanish");
		var translatedGreetingArray = [];
		userInputArray.forEach(function(word){
			translatedGreetingArray.push(spanish[word]);
		})
		var text2speech = translatedGreetingArray.join(" ");
    $("#translateButton").on("click", responsiveVoice.speak(text2speech));
		return translatedGreetingArray;

	};
	return translator;
})(translator);