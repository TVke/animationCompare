var creationPlace = document.getElementById("allFlakes");
var amountOfFlakeImages = 10;
var animationDelay = 0.32342;

function snow(amountOfFlaks){
	for(var i=0;i<amountOfFlaks;++i){
		var percentFromTheLeft = randomNumber(-1,100,2);
		var delay = roundNumber(animationDelay * i,2);
		var whichFlake = randomNumber(1,amountOfFlakeImages,0);
		var newFlakes = document.createElement("img");
		newFlakes.src = "flake-" + whichFlake + ".svg";
		newFlakes.setAttribute("style","left:" + percentFromTheLeft + "%;animation-delay:" + delay + "s;");
		creationPlace.appendChild(newFlakes);
	}
}
function roundNumber(number, precision){
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(number * multiplier) / multiplier;
}
function randomNumber(min, max, roundPrecision){
	return roundNumber(Math.random() * (max - min) + min,roundPrecision);
}
snow(50);