(function(window){
	//in an IIFE
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name){
  		console.log(speakWord + " " + name);
	};
	window.helloSpeaker = helloSpeaker;
})(window);


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.


// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;