
$('document').ready( function() {

	function Fizzbuzz(number) {

		var content = "";
		var fizzNumber = parseInt(number) || 0;
		console.log(fizzNumber);

		if (fizzNumber > 0 && fizzNumber % 1 === 0) {
			for (var i = 1; i <= fizzNumber; i++) {
				if (i % 3 == 0 && i % 5 == 0) {
					content += "<p>FizzBuzz</p>";
				}
				else if (i % 3 == 0) {
					content += "<p>Fizz</p>";
				}
				else if (i % 5 == 0) {
					content += "<p>Buzz</p>";
				}
				else {
					content += "<p>" + i + "</p>";
				}
			}

			document.getElementById('output').innerHTML = content;
		} 
		else 
		{
			alert("You must input an integer whole number!");
		}
	}

	document.getElementById('user-input').addEventListener("keyup", function(e) {
		if (e.which == 13) {
			if (this.value != "") {
				Fizzbuzz(this.value);
			}
		}
	});
});