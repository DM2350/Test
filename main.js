// TODO:
// Läsa in listor
// Justera timing för stimuli
// Fixa random text
// Spara ner info
// Kolla vilken tangentbordsknapp som tryckts ner
// Add timing för svar
// Färg
// Design

// Global Variables
colourList = [];
globalListOfData = [];

// All colours
green	= '#247e18'
red 	= '#6D1515'

blueBlue 	= '#15156d'
blueGreen 	= '#156d5d'
blueViolet	= '#53156d'
greenGreen	= '#1f6d15'
orangeOrange= '#df8c16'
redRed		= '#7f1717'
redOrange	= '#b24217'
redViolet	= '#6d1549'
violetViolet= '#68156d'
yellowYellow= '#d0cc2a'
yellowGreen = '#71941c'
yellowOrange= '#d0aa2a'

function viewChanger(viewString) {

	if(viewString == "start") { 
		document.getElementById("image").style.display = "none"
		document.getElementById("thanks").style.display = "none"
		document.getElementById("testText").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("startButton").style.display = "block"
	} else if(viewString == "text") {
		document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("testText").style.display = "block"
		document.getElementById("startButton").style.display = "none"
	} else if(viewString == "noise") {
		document.getElementById("testText").style.display = "none"
	} else if(viewString == "question") {
		document.getElementById("image").style.display = "block"
		document.getElementById("sameAsYouSaw").style.display = "block"
		document.getElementById("answer").style.display = "block"
	} else if(viewString == "end") {
		document.getElementById("image").style.display = "none"
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
	//viewChanger("text")
	listLooper()
}

window.addEventListener("keydown", keyDownFunction);

function keyDownFunction() {

	
		//compare strings
		//save data to globalListOfData 
	var list = [];
	
	//YES
	if ("keydown" == 37) { 
		list.push("YES");
		if ("testText" == "answer"){
			list.push("CORRECT")
			else {
				list.push("INCORRECT")
			}
		}

	}
	
	//NO
	if ("keydown" == 39) { 
		list.push("NO")
		if("testText" != "answer"){
			list.push("CORRECT")
		}
		else {
			list.push("INCORRECT")
		}
	}

}

		

	

   // TODO KOLLA OM DET ÄR RÄTT/FEL SVAR
   // SPARA DATA i listan
   //
   // if right or wrong
   //
   listLooper()
		}
}

function listLooper(){
	viewChanger("text")
	document.getElementById("testText").innerHTML = getRandomText()
	// TODO FIX ANSWER FOR TEXT
	document.getElementById("answer").innerHTML = "XXXX"
    viewChanger("text")
    setTimeout(noise, 1000)
    setTimeout(question, 2000)
}

function question() {
	viewChanger("question")
}

function noise() {
	viewChanger("noise")
}

function getRandomText() {
	// TODO FIX THIS
	return "TODO"
}

viewChanger("start")

