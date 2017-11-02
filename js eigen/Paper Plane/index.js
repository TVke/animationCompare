var frameRate = 25;

function animate(element,CSSRule,from,to,howLong){
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

function roundNumber(number, precision){
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(number * multiplier) / multiplier;
}
