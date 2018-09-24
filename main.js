// TODO:

// Ändra (om vi vill):
// 	Färger
// 	Design
// 	Tajming av noise och question

// Global Variables

colourList = []; //en shufflad lista av färgkombinationer [[bakgrund, textfärg], ...]
letterCombo = []; //bokstavskombinationerna som ska visas
globalListOfData = [];
globalTextCounter = 0;
globalListCounter = 0;
globalStatus = "";
startDate = new Date();
endDate = new Date();

same = true;
different = false;

id = prompt("Please enter file name:", "Person_1");

// All colours
green	= '#247e18'
red 	= '#6D1515'
blue 	= '#14306d'


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

	globalStatus = viewString;

	if(viewString == "start") { 
		document.getElementById("image").style.display = "none"
		document.getElementById("info").style.display = "none"
		document.getElementById("thanks").style.display = "none"
		document.getElementById("testText").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("startButton").style.display = "block"
	} else if(viewString == "text") {
		document.getElementById("info").style.display = "none"
		document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("testText").style.display = "block"
		document.getElementById("startButton").style.display = "none"
	} else if(viewString == "noise") {
		document.getElementById("testText").style.display = "none"
	} else if(viewString == "question") {
		document.getElementById("info").style.display = "block"
		document.getElementById("image").style.display = "block"
		document.getElementById("sameAsYouSaw").style.display = "block"
		document.getElementById("answer").style.display = "block"
	} else if(viewString == "end") {
		document.getElementById("info").style.display = "none"
		document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("thanks").style.display = "block"
	} else {
		console.log("ERROR! viewChanger did not recieve proper string");
	}
}

function readLists() {

//colourList = [[red,redRed,same],[green,redRed,same]];

colourList = [[red,redRed,same],[green,redRed,same],[red,redViolet,same],[green,redViolet,same],[red,violetViolet,same],[green,violetViolet,same],[red,blueViolet,same],[green,blueViolet,same],[red,blueBlue,same],[green,blueBlue,same],[red,blueGreen,same],[green,blueGreen,same],[red,greenGreen,same],[green,greenGreen,same],[red,yellowGreen,same],[green,yellowGreen,same],[red,yellowYellow,same],[green,yellowYellow,same],[red,yellowOrange,same],[green,yellowOrange,same],[red,orangeOrange,same],[green,orangeOrange,same],[red,redOrange,same],[green,redOrange,same],[red,redRed,different],[green,redRed,different],[red,redViolet,different],[green,redViolet,different],[red,violetViolet,different],[green,violetViolet,different],[red,blueViolet,different],[green,blueViolet,different],[red,blueBlue,different],[green,blueBlue,different],[red,blueGreen,different],[green,blueGreen,different],[red,greenGreen,different],[green,greenGreen,different],[red,yellowGreen,different],[green,yellowGreen,different],[red,yellowYellow,different],[green,yellowYellow,different],[red,yellowOrange,different],[green,yellowOrange,different],[red,orangeOrange,different],[green,orangeOrange,different],[red,redOrange,different],[green,redOrange,different]];


letterCombo = [['RNVZ', 'RNVJ'],['GGEO', 'GLEO'],['VHOA', 'VHOL'],['NSID', 'NSJD'],['ZZKS', 'ZZRS'],['REDA', 'REDG'],['OONY', 'OOXY'],['HDFJ', 'HDFA'],['VRZL', 'RRZL'],['YTUU', 'VTUU'],['YPOC', 'YPJC'],['GRAK', 'GRRK'],['JXKF', 'JXCF'],['VSMF', 'VHMF'],['CSCF', 'CSZF'],['ICXV', 'MCXV'],['PYCX', 'FYCX'],['TUMT', 'TUNT'],['FCDS', 'FCDC'],['GCQN', 'GQQN'],['VXTZ', 'VXTV'],['GETM', 'GETI'],['APZH', 'AEZH'],['ATEO', 'ATKO'],['NZXZ', 'NZUZ'],['YFFN', 'YLFN'],['OZKS', 'OZSS'],['BKNV', 'OKNV'],['HZGK', 'HJGK'],['TZAA', 'TGAA'],['BINL', 'BIIL'],['UCPR', 'UAPR'],['UQLB', 'CQLB'],['CAYK', 'NAYK'],['NNUE', 'BNUE'],['ODBD', 'ODLD'],['VFDH', 'VFDD'],['OFJH', 'OFKH'],['CPLV', 'CYLV'],['DPDC', 'DPXC'],['SOLS', 'SSLS'],['YQBX', 'YZBX'],['CBPA', 'CJPA'],['BKZP', 'NKZP'],['KLAE', 'KLAL'],['YDRN', 'YXRN'],['HDDU', 'BDDU'],['BHKJ', 'BHKG'],['YQUD', 'YNUD'],['BNVR', 'BHVR'],['FGAN', 'CGAN'],['QDMK', 'QDMN'],['UXZL', 'UXYL'],['IJYY', 'IJIY'],['FYAY', 'SYAY'],['DFZK', 'DFDK'],['MGQK', 'MGQU'],['AMDU', 'HMDU'],['LOUB', 'LOJB'],['FMHM', 'FMXM'],['SZSF', 'SKSF'],['HUVN', 'HUXN'],['GCOP', 'GBOP'],['OKEB', 'LKEB'],['OYHU', 'OGHU'],['YVCI', 'YVCE'],['OYBH', 'OUBH'],['NXKE', 'NXKZ'],['EOQK', 'EMQK'],['MPDI', 'MFDI'],['VKTZ', 'CKTZ'],['QGGG', 'QGGT'],['SHQZ', 'SXQZ'],['IGXM', 'QGXM'],['YOND', 'NOND'],['DSNF', 'DSQF'],['TGEQ', 'TGEL'],['HCJE', 'VCJE'],['IUDL', 'ICDL'],['LNBH', 'LHBH'],['PKKV', 'GKKV'],['ODFK', 'RDFK'],['ZMHO', 'ZMHK'],['VEQB', 'VEQL'],['AJOD', 'AJOX'],['SSJH', 'SSEH'],['NYIK', 'ZYIK'],['RUDG', 'RUUG'],['CVGZ', 'EVGZ'],['FGQM', 'FGQC'],['SRRU', 'SRSU'],['GEPM', 'PEPM'],['JQJP', 'JQJY'],['TOLQ', 'TOLY'],['JMQK', 'JMQX'],['RYBU', 'IYBU'],['DXPT', 'DXHT'],['PTJJ', 'PLJJ'],['JCOO', 'JDOO'],['MTON', 'ITON']]

	

/*
	colourList = [[red, blueBlue], [red, blueGreen], [red, blueViolet], [red, greenGreen], [red, orangeOrange], [red, redRed], [red, redOrange],
		[red, redViolet], [red, violetViolet], [red, yellowYellow], [red, yellowGreen], [red, yellowOrange][green, blueBlue], [green, blueGreen], [green, blueViolet],
		[green, greenGreen], [green, orangeOrange], [green, redRed], [green, redOrange], [green, redViolet], [green, violetViolet], [green, yellowYellow], [green, yellowGreen],
		[green, yellowOrange]];
*/
	shuffleArray(colourList);
	shuffleArray(letterCombo);

	testCases = [[blue,orangeOrange,same],[blue,greenGreen,same],[blue,blueViolet,same]];

	colourList = testCases.concat(colourList);

}

function start() {
	readLists()
	listLooper()
}

window.addEventListener("keydown", keyDownFunction);

function keyDownFunction(e) {

	if(globalStatus == "question") {
	endDate   = new Date()
	var list = [];
	var key = e.KeyCode ? e.keyCode : e.which
	list.push(key)
	list.push(colourList[globalListCounter-1][0])
	list.push(colourList[globalListCounter-1][1])
	list.push(colourList[globalListCounter-1][2])
	list.push(document.getElementById("testText").innerHTML)
	list.push(document.getElementById("answer").innerHTML)
	list.push((endDate.getTime() - startDate.getTime()))
	list.push(startDate)
	list.push(endDate)
	//YES
	//console.log(key)
	if (key == 39) { 
		list.push("YES");
		if (document.getElementById("testText").innerHTML == document.getElementById("answer").innerHTML){
			list.push("CORRECT")
		}
		else {
			list.push("INCORRECT")
		}
		globalListOfData.push(list)
		listLooper()

	}
	
	//NO
	else if (key == 37) { 
		list.push("NO")
		if(document.getElementById("testText").innerHTML != document.getElementById("answer").innerHTML){
			list.push("CORRECT")
		}
		else {
			list.push("INCORRECT")
		}
		globalListOfData.push(list)
		listLooper()
	}
	}
}

function listLooper(){
	
	if(globalListCounter<colourList.length) {
		
		words = getRandomText()

		colours = colourList[globalListCounter]

		if(colours[2]) {
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

		const filename = id + '.json';
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
	startDate = new Date();
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

