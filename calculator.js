const input = document.getElementById("inputbox");
const buttons = document.querySelectorAll("button");
const calculate = document.getElementById("btnEqual");
const clear = document.getElementById("btnClear");
const Square = document.getElementById("btnSquare");
const Sqrt = document.getElementById("btnSqrt");
const Log = document.getElementById("btnLog");
const pattern = /^\s*([-+]?)(\d+)(?:\s*([-+*\/.])\s*((?:\s[-+])?\d+)\s*)+$/;
const patt = /^[0-9]/;

for (let i = 0; i < buttons.length; i++) {
	if (
		buttons[i].innerText == "=" ||
		buttons[i].innerText == "x2" ||
		buttons[i].innerText == "sqrt" ||
		buttons[i].innerText == "C" ||
		buttons[i].innerText == "log"
	) {
		continue;
	} else {
		buttons[i].addEventListener("click", function () {
			input.value += buttons[i].innerText;
		});
	}
}

// Returning DMAS Value
calculate.addEventListener("click", function () {
	let textValue = pattern.test(input.value);
	let answer;
	if (textValue == false) {
		input.value = null;
	} else {
		answer = eval(input.value);
		if (input.value == "") {
			input.value += "";
		} else {
			input.value = answer;
		}
	}
});

// Clearing Input Box
clear.addEventListener("click", function () {
	input.value = null;
});

// Returning Square Value
Square.onclick = getSquare;
function getSquare() {
	let textValue = patt.test(input.value);
	let answer;
	if (textValue == false) {
		input.value = null;
	} else {
		answer = eval(input.value);
		input.value = answer * answer;
	}
}

// Returning Square Root Value
Sqrt.onclick = getSqrt;
function getSqrt() {
	let textValue = patt.test(input.value);
	if (textValue == false) {
		input.value = null;
	} else {
		input.value = Math.sqrt(input.value);
	}
}

// Returnin Log Value
Log.onclick = getLog;
function getLog() {
	let textValue = pattern.test(input.value);
	let text = patt.test(input.value);
	if (textValue == false && text == false) {
		input.value = null;
	} else {
		input.value = Math.log10(eval(input.value));
	}
}
