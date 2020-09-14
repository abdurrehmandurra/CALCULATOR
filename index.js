var input = document.getElementById("inputbox");
var buttons = document.querySelectorAll("button");
var calculate = document.getElementById("btnEqual");
const clear = document.getElementById("btnClear");

for (let i = 0; i < buttons.length; i++) {
	if (buttons[i].innerText == "=") {
		continue;
	} else {
		buttons[i].addEventListener("click", function () {
			input.value += buttons[i].innerText;
			console.log(input.value);
		});
	}
	// console.log(buttons[i].innerText);
}
calculate.addEventListener("click", function () {
	let answer = eval(input.value);
	if (input.value == "") {
		input.value += "";
	} else {
		input.value = answer;
		// console.log(answer);
		// console.log(calculate.innerText);
	}
});

clear.addEventListener("click", function () {
	input.value = "";
});
