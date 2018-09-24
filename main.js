// TODO:
// Läsa in listor // LISA
// Justera timing för stimuli
// Fixa random text // PER
// Spara ner info
// Kolla vilken tangentbordsknapp som tryckts ner // MARTIN
// Add timing för svar
// Färg
// Design
// JUSTERA HUR OFTA DET ÄR SAMMA OCH INTE

// Global Variables

colourList = []; //en shufflad lista av färgkombinationer [[bakgrund, textfärg], ...]
letterCombo = []; //bokstavskombinationerna som ska visas
globalListOfData = [];
globalTextCounter = 0;
globalListCounter = 0;


// All colours
green	= '#247e18'
red 	= '#6D1515'

blueBlue 	= '#15156d'
blueGreen 	= '#156d5d'
blueViolet	= '#53156d'
greenGreen	= '#1f6d15'
orangeOrange	= '#df8c16'
redRed		= '#7f1717'
redOrange	= '#b24217'
redViolet	= '#6d1549'
violetViolet	= '#68156d'
yellowYellow	= '#d0cc2a'
yellowGreen 	= '#71941c'
yellowOrange	= '#d0aa2a'

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
	// TODO fyller i vettig info i colourList och globalListOfData, [[red, green],[red, redred]...]
	colourList = [[red, blueBlue], [red, blueGreen], [red, blueViolet], [red, greenGreen], [red, orangeOrange], [red, redRed], [red, redOrange],
		[red, redViolet], [red, violetViolet], [red, yellowYellow], [red, yellowGreen], [red, yellowOrange][green, blueBlue], [green, blueGreen], [green, blueViolet],
		[green, greenGreen], [green, orangeOrange], [green, redRed], [green, redOrange], [green, redViolet], [green, violetViolet], [green, yellowYellow], [green, yellowGreen],
		[green, yellowOrange]];
	shuffleArray(colourList);

}

function start() {
	//viewChanger("text")
	listLooper()
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
	
	if(globalListCounter<colourList.length) {
		
		words = getRandomText()

		colours = colourList[globalListCounter]

		if(colours[2] == "same") {
			document.getElementById("testText").innerHTML = words[0]
			document.getElementById("answer").innerHTML = words[0]
		}
		else {
			document.getElementById("testText").innerHTML = words[0]
			document.getElementById("answer").innerHTML = words[1]

		}
		
		document.body.style.backgroundColor = colours[0];
		document.getElementById("testText").style.color = colours[1];
		viewChanger("text")

		setTimeout(noise, 1000)
		setTimeout(question, 2000)


		globalListCounter +=1
	}
	else {
		//TESTING DONE!!!
		viewChanger("end")
		JsonExport = globalListOfData

		// https://stackoverflow.com/questions/33780271/export-a-json-object-to-a-text-file

		const filename = 'data.json';
		const jsonStr = JSON.stringify(JsonExport);

		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);		
	}

}

function question() {
	viewChanger("question")
}

function noise() {
	document.body.style.backgroundColor = "white";
	viewChanger("noise")
}

function getRandomText() {
	globalTextCounter += 1
	return letterCombo[globalTextCounter-1]
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * saxat från StackOverflow
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

viewChanger("start")

