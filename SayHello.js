(function(window) {
	var IntroductionWord = "Hello";
	var hello = function (name) {
		console.log(IntroductionWord + " " + name);
	}

	window.hello = hello;

	})(window);