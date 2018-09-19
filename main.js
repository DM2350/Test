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

colourList = [];
globalListOfData = [];

function viewChanger(viewString) {

	if(viewString == "start") {
		// Block thing show things
	} else if(viewString == "text") {

	} else if(viewString == "noise") {

	} else if(viewString == "question") {

	} else if(viewString == "saving") {

	} else if(viewString == "end") {

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
	window.getElementById("text").innerHTML = getRandomText()
	// TODO FIX ANSWER FOR TEXT
	window.getElementById("answer").innerHTML = "XXXX"
    viewChanger("text")
    setTimeout(viewString("noise"), 500)
    setTimeout(viewChanger("question"), 1000)
}

function getRandomText() {
	// TODO FIX THIS
	return "TODO"
}



