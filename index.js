var frameRate = 50;

function roundNumber(number, precision){
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(number * multiplier) / multiplier;
}

function randomNumber(min, max, roundPrecision){
	return roundNumber(Math.random() * (max - min) + min,roundPrecision);
}

function animate(element,CSSRule,from,to,measurement,howLong){
	var counter = 0;
	var step = (to - from) / (howLong/(1/frameRate));

	// function animation(){
		var animate = 0;
		clearInterval(animate);
		animate = setInterval(function(){
			if( from + (step * counter) <= to){
				element.setAttribute("style",CSSRule + ":" + roundNumber((from + (step * counter)),2) + measurement);
				++counter;
			}else{
				element.setAttribute("style",CSSRule + ":" + to + measurement);
				clearInterval(animate);
			}
		},roundNumber((1/frameRate)*1000),0);
}


// function snow(amountOfFlaks,insideElement){
// 	var animationDelay = 0.32342;
// 	var flakeImageAmount = 10;
// 	for(var i=0;i<amountOfFlaks;++i){
// 		var percentFromTheLeft = randomNumber(-1,100,2);
// 		var delay = roundNumber(animationDelay * i,2);
// 		var whichFlake = randomNumber(1,flakeImageAmount,0);
// 		var newFlakes = document.createElement("img");
// 		newFlakes.src = "flake-" + whichFlake + ".svg";
// 		newFlakes.setAttribute("style","left:" + percentFromTheLeft + "%;animation-delay:" + delay + "s;");
// 		insideElement.appendChild(newFlakes);
// 	}
// }

var ball = document.getElementById("ball");
animate(ball,"left",0,100,"%",3);
// infinite execution
setInterval(function(){
	animate(ball,"left",0,100,"%",3);
},3*1000);
