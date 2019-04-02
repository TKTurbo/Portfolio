function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var clicker = 0
var body = document.getElementsByTagName("body");

function yamete() {
	var yamete = new Audio("sounds/oof.wav");
	yamete.play();
	// Om de tijd te resetten naar 0 : yamete.currentTime=0;
	document.images["logo"].src = "images/logomad.png";
	clicker++;
	document.getElementById("clicker").innerHTML = clicker

	/* if (clicker) == 0{
		document.getElementById("yee").style.animation.
	} */
}

let cursor = 0;
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == konamiCode[cursor]) ? cursor + 1 : 0;
  if (cursor == konamiCode.length) konami();
});

function konami() {
	document.body.style.setProperty("-webkit-animation", "spin 1s infinite linear", null);
	// var animatie = "-webkit-animation"
	// document.head.innerHTML+=
	// geen fucking idee hoe ik dit doe
}

function hamBurger() {
	var mobBar = document.getElementById("mobileLinks");
	var home = document.getElementById("homelink");
	var info = document.getElementById("infolink");
	var contact = document.getElementById("contactlink");
	var mbLinks = document.getElementById("mobileLinks");
	var content = document.getElementById("container");
	var contactinfo = document.getElementById("contactinformatie");
	var fieldset = document.getElementById("fieldset")

	if (mobBar.style.height === "160px") {
		mbLinks.style.border = "none";
    	mobBar.style.height = "0";
    	home.style.display = "none";
    	info.style.display = "none";
    	contact.style.display = "none";
    	fieldset.style.marginBottom = "60px";
    	contactinfo.style.float = "none";
    	contactinfo.style.width = "100%"
    	contactinfo.style.marginRight = "0px";
    	fieldset.style.marginTop = "0";
    	// contactinfo.style.marginTop = "0px";
    	// content.style.marginLeft = "0px";

	} else {
    	mobBar.style.height = "160px";
    	mbLinks.style.border = "1px black solid";
    	home.style.display = "block";
    	info.style.display = "block";
    	contact.style.display = "block";
    	fieldset.style.marginBottom = "65px"
    	contactinfo.style.float = "right";
		contactinfo.style.width = "200px";
		contactinfo.style.marginRight = "6%";
		fieldset.style.marginTop = "170px";
		// contactinfo.style.marginTop = "30px";
    	// content.style.marginLeft = "100px";
	}
}