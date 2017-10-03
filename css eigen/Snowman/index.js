var creationPlace = document.getElementById("allflakes");
var delay = 0.32342;

function start(amountOfFlaks){
	for(let i=0;i<amountOfFlaks;++i){
		var percentFromTheLeft = (Math.random()*110)-10;
		var wichFlake = Math.floor((Math.random()*9)+1);
		var newFlakes = document.createElement("img");
		newFlakes.src = "flake-"+wichFlake+".svg";
		newFlakes.setAttribute("style","left:"+percentFromTheLeft+"%;animation-delay:"+(delay*i)+"s;");
		creationPlace.appendChild(newFlakes);
	}
}

start(50);