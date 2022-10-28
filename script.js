class Card {
	eng;
	ukr;
	isAnswered = false;
	constructor(eng, ukr) {
		this.eng = eng;
		this.ukr = ukr;
	}
}
const tooltip1 = new bootstrap.Tooltip(document.getElementById("1"));
const tooltip2 = new bootstrap.Tooltip(document.getElementById("2"));
const tooltip3 = new bootstrap.Tooltip(document.getElementById("3"));
var currIndex = 0;
var rightCounter = 0;
var wrongCounter = 0;
var arrOfCards;

$(".smallResults").hide();
$(".cardContainer,.cardSwitcher,.answerChecker").hide();


var showingEng = true;
$(".cardContainer").on("click", function (event) {
	if (showingEng) {
		$(event.target).removeClass("hideWord");
		$(event.target).addClass("showWord");
		setTimeout(function () { $("#cardText").text(arrOfCards[currIndex].ukr); }, 500);
		$("#check").click();
		showingEng = false;
	}
	else {
		$(event.target).removeClass("showWord");
		$(event.target).addClass("hideWord");
		setTimeout(function () { $("#cardText").text(arrOfCards[currIndex].eng); }, 500);
		showingEng = true;
	}
})
$("#easy").on("click", function () {
	showingEng = true;
	var size = parseInt(prompt("Input number of cards to learn:"));

	if (isNaN(size)) {
		$(".smallResults").hide();
		$(".cardContainer,.cardSwitcher,.answerChecker").hide();
		return;
	}

	$(".cardContainer,.cardSwitcher,.answerChecker").fadeIn(600);
	$(".difficultyChooser").css("margin-right", "50%");
	arrOfCards = new Array(size);
	for (let i = 0; i < arrOfCards.length; i++) {

		arrOfCards[i] = new Card(
			prompt(`Input English word for card ${i + 1} to learn:`),
			prompt(`Input Ukrainian translation for card ${i + 1} to learn:`)
		);
	}
	shuffleArray(arrOfCards);

	$("#total-number-of-cards").text(arrOfCards.length);

	currIndex = 0;
	rightCounter = 0;
	wrongCounter = 0;
	if (arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
	} else {
		$("input[type~='submit']").attr("disabled", null);
		$("input[type~='text']").attr("disabled", null);
	}
	$("#cardText").text(arrOfCards[currIndex].eng);
	$(".cardContainer").removeClass("hideWord");
	$(".cardContainer").removeClass("showWord");
	$("#currCard").text(currIndex + 1);


	$(".smallResults").hide();
	$("#corrects").text(rightCounter);
	$("#wrongs").text(wrongCounter);
});
$("#medium").on("click", function () {
	$(".cardContainer,.cardSwitcher,.answerChecker").fadeIn(600);
	showingEng = true;
	arrOfCards = [
		new Card("account for", "Враховувати щось"),

		new Card("bank on", "Покладатися на когось"),

		new Card("carry on", "Продовжувати"),

		new Card("account for", "Враховувати"),

		new Card("ease off", "Зменшувати, пом'якшувати"),

		new Card("fill out", "Заповнювати"),

		new Card("get along", "Ладнати"),

		new Card("hand in", "Вручити"),

		new Card("iron out", "Згладжувати"),

		new Card("keep up", "Іти в ногу"),
	];
	shuffleArray(arrOfCards);

	$("#total-number-of-cards").text(arrOfCards.length);

	currIndex = 0;
	rightCounter = 0;
	wrongCounter = 0;
	if (arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
	} else {
		$("input[type~='submit']").attr("disabled", null);
		$("input[type~='text']").attr("disabled", null);
	}
	$("#cardText").text(arrOfCards[currIndex].eng);
	$(".cardContainer").removeClass("hideWord");
	$(".cardContainer").removeClass("showWord");
	$("#currCard").text(currIndex + 1);


	$(".smallResults").hide();
	$("#corrects").text(rightCounter);
	$("#wrongs").text(wrongCounter);
});
$("#hard").on("click", function () {
	$(".cardContainer,.cardSwitcher,.answerChecker").fadeIn(600);
	showingEng = true;
	arrOfCards = [
		new Card("File 13", "Кошик для сміття"),

		new Card("Quick buck", "Легкі гроші"),

		new Card("Have bigger fish to fry", "Мати більш важливі справи"),

		new Card("Break new ground", "Відкривати щось нове"),

		new Card("Cross paths", "Випадково зустріти когось"),

		new Card("Dab hand", "Експерт"),

		new Card("Easy does it", "Тихіше їдеш - далі будеш"),

		new Card("Hand in", "Вручити"),

		new Card("Feel blue", "Бути засмученим"),

		new Card("Go out on a limb", "Ризикнути"),
	];
	shuffleArray(arrOfCards);

	$("#total-number-of-cards").text(arrOfCards.length);

	currIndex = 0;
	rightCounter = 0;
	wrongCounter = 0;

	if (arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
	} else {
		$("input[type~='submit']").attr("disabled", null);
		$("input[type~='text']").attr("disabled", null);
	}
	$("#cardText").text(arrOfCards[currIndex].eng);
	$(".cardContainer").removeClass("hideWord");
	$(".cardContainer").removeClass("showWord");
	$("#currCard").text(currIndex + 1);


	$(".smallResults").hide();
	$("#corrects").text(rightCounter);
	$("#wrongs").text(wrongCounter);
});


function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}




$(".switch").hover(
	function (event) {
		$(event.target).css("color", "red");
	},
	function (event) {
		$(event.target).css("color", "black");
	}
);
$("label").hover(
	function (event) {
		$(event.target).css("color", "red");
	},
	function (event) {
		$(event.target).css("color", "black");
	}
);





$("#switch-left").on("click", function () {
	showingEng = true;
	if (currIndex == 0) return;
	$("#cardText").fadeOut(600);
	setTimeout(function () {
		$("#cardText").text(arrOfCards[--currIndex].eng);
		$("#currCard").text(currIndex + 1);
		$("#cardText").fadeIn(600);
		if (arrOfCards[currIndex].isChecked) {
			$("input[type~='submit']").attr("disabled", "true");
			$("input[type~='text']").attr("disabled", "true");
		} else {
			$("input[type~='submit']").attr("disabled", null);
			$("input[type~='text']").attr("disabled", null);
		}
	}, 600);
});

$("#switch-right").on("click", function () {
	showingEng = true;
	if (currIndex == arrOfCards.length - 1) return;
	$("#cardText").fadeOut(600);
	setTimeout(function () {
		$("#cardText").text(arrOfCards[++currIndex].eng);
		$("#currCard").text(currIndex + 1);
		$("#cardText").fadeIn(600);
		if (arrOfCards[currIndex].isChecked) {
			$("input[type~='submit']").attr("disabled", "true");
			$("input[type~='text']").attr("disabled", "true");
		}
		else {
			$("input[type~='submit']").attr("disabled", null);
			$("input[type~='text']").attr("disabled", null);
		}
	}, 600);
});

$("#check").on("click", function (event) {
	event.preventDefault();
	let currAnswer = $("#answer").val();
	$("#answer").val(null);
	if (!arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
		if (currAnswer.toLowerCase() == arrOfCards[currIndex].ukr.toLowerCase()) {
			rightCounter++;
			$(".fa-circle-check").toggleClass("animateRight");
			setTimeout(function () {
				$(".fa-circle-check").toggleClass("animateRight");
			}, 600);
		} else {
			wrongCounter++;
			$(".fa-circle-xmark").toggleClass("animateWrong");
			setTimeout(function () {
				$(".fa-circle-xmark").toggleClass("animateWrong");
			}, 600);
		}
		$("#corrects").text(rightCounter);
		$("#wrongs").text(wrongCounter);
		$(".smallResults").fadeIn(600);

		if (rightCounter + wrongCounter == arrOfCards.length) {

			if (rightCounter / arrOfCards.length <= 0.25) {
				$(".modal-body").html(
					`<span class="text">Погана робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
				$("#results").modal("show");
				return;
			}
			if (rightCounter / arrOfCards.length <= 0.5) {
				$(".modal-body").html(
					`<span class="text">Середня робота. Підготуйтеся краще!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
				$("#results").modal("show");
				return;
			}
			if (rightCounter / arrOfCards.length <= 0.75) {
				$(".modal-body").html(
					`<span class="text">Задовільна робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
				$("#results").modal("show");
				return;
			}
			if ((rightCounter / arrOfCards.length) == 1) {

				$(".modal-body").html(
					`<span class="text">Відмінна робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
				$("#results").modal("show");
				return;
			}
		}
		
		arrOfCards[currIndex].isChecked = true;
		
	}
});
