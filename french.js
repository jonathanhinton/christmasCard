var translator = (function(translator){
	var french = {
		"merry": "joyeux",
		"christmas": "Noël",
		"happy": "content",
		"new": "nouveau",
		"year": "année",
		"seasons": "saisons",
		"greetings": "salutations",
		"holidays": "vacances",
		"hope": "espoir",
		"joy": "joie",
		"peace": "paix",
		"on": "sur",
		"earth": "terre",
		"goodwill": "bonne volonté",
		"toward": "vers",
		"men": "hommes",
		"and": "et"
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