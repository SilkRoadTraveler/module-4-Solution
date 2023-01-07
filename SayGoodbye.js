(function(window) {
	var IntroductionWord = "Good Bye";
	var bye = function (name) {
  		console.log(IntroductionWord + " " + name);
	}
	
	window.bye = bye;

})(window);