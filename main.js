// TODO:
// LÄSA IN LISTOR
// TIMING GREJ
// SKAPA VIEWS
//		Start
//		Text
//		Brus
// 		Question med next press X eller liknande
//		Spara info
//		Slutmeny

// ADD TIMING FOR ANSWERS

colourList = [];
globalListOfData = [];

function viewChanger(viewString) {

	if(viewString == "start") {
		document.getElementById("thanks").style.display = "none"
		document.getElementById("testText").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("startButton").style.display = "block"
	} else if(viewString == "text") {
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("testText").style.display = "block"
		document.getElementById("startButton").style.display = "none"
	} else if(viewString == "noise") {
		document.getElementById("testText").style.display = "none"
	} else if(viewString == "question") {
		document.getElementById("sameAsYouSaw").style.display = "block"
		document.getElementById("answer").style.display = "block"
	} else if(viewString == "end") {
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("thanks").style.display = "block"
	} else {
		console.log("ERROR! viewChanger did not recieve proper string");
	}
}

function readLists() {
	// TODO fyller i vettig info i colourList och globalListOfData
}

function start() {
	viewChanger("start")
}

window.addEventListener("keydown", keyDownFunction);

function keyDownFunction() {
    // TODO KOLLA OM DET ÄR RÄTT/FEL SVAR
    // SPARA DATA i listan
    //
   // if right or wring
   //
    listLooper()
}

function listLooper(){
	window.getElementById("testText").innerHTML = getRandomText()
	// TODO FIX ANSWER FOR TEXT
	window.getElementById("sameAsYouSaw").innerHTML = "XXXX"
    viewChanger("text")
    setTimeout(viewString("noise"), 500)
    setTimeout(viewChanger("question"), 1000)
}

function getRandomText() {
	// TODO FIX THIS
	return "TODO"
}



