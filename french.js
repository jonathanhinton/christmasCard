var translator = (function(translator){
	var french {
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
		translator.translateToFrench = function (userInputArray) {
		console.log("translating to french");
		var translatedGreetingArray = [];
		userInputArray.forEach(function(word){
			translatedGreetingArray.push(french[word]);
		})
		var text2speech = translatedGreetingArray.join(" ");
    $("#translateButton").on("click", responsiveVoice.speak(text2speech, "French Female"));
		return translatedGreetingArray;

		};
		return translator;
})(translator);