
function roundNumber(number, precision){
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(number * multiplier) / multiplier;
}

function randomNumber(min, max, roundPrecision){
	return roundNumber(Math.random() * (max - min) + min,roundPrecision);
}

function animate(element,CSSRule,from,to,howLong,frameRate){
	var counter = 0;
	var step = (to - from) / (howLong/(1/frameRate));
	var animation = 0;

	clearInterval(animation);
	animation = setInterval(function(){
		if( from + (step * counter) <= to){
			element.setAttribute("style",CSSRule + ":" + roundNumber((from + (step * counter)),2) + "%");
			++counter;
		}else{
			element.setAttribute("style",CSSRule + ":" + to + "%");
			clearInterval(animation);
		}
	},roundNumber((1/frameRate)*1000),0);
}


function snow(amountOfFlaks,insideElement){
	var animationDelay = 0.32342;
	var flakeImageAmount = 10;
	for(var i=0;i<amountOfFlaks;++i){
		var percentFromTheLeft = randomNumber(-1,100,2);
		var delay = roundNumber(animationDelay * i,2);
		var whichFlake = randomNumber(1,flakeImageAmount,0);
		var newFlakes = document.createElement("img");
		newFlakes.src = "flake-" + whichFlake + ".svg";
		newFlakes.setAttribute("style","left:" + percentFromTheLeft + "%;animation-delay:" + delay + "s;");
		insideElement.appendChild(newFlakes);
	}
}