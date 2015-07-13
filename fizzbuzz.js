
$('document').ready( function() {

	function FizzBuzz(number) {

		var msg = "";
		var fizzNumber = parseInt(number) || 0;

		if (fizzNumber > 0 && fizzNumber % 1 === 0) {
			for (var i = 1; i <= fizzNumber; i++) {
				if (i % 3 == 0 && i % 5 == 0) {
					msg += "<p>FizzBuzz</p>";
				}
				else if (i % 3 == 0) {
					msg += "<p>Fizz</p>";
				}
				else if (i % 5 == 0) {
					msg += "<p>Buzz</p>";
				}
				else {
					msg += "<p>" + i + "</p>";
				}

			document.getElementById('output').innerHTML = msg;

			} 

		} else {
				alert("You must enter an integer whole number!");
			}
	}

	document.getElementById('user-input').addEventListener('keyup', function(e) {
		if (e.which === 13) {
			if (this.value !== "") {
				FizzBuzz(this.value);
			}
		}
	});
});