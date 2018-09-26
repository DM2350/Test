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

// 4 letters
//letterCombo = [['RNVZ', 'RNVJ'],['GGEO', 'GLEO'],['VHOA', 'VHOL'],['NSID', 'NSJD'],['ZZKS', 'ZZRS'],['REDA', 'REDG'],['OONY', 'OOXY'],['HDFJ', 'HDFA'],['VRZL', 'RRZL'],['YTUU', 'VTUU'],['YPOC', 'YPJC'],['GRAK', 'GRRK'],['JXKF', 'JXCF'],['VSMF', 'VHMF'],['CSCF', 'CSZF'],['ICXV', 'MCXV'],['PYCX', 'FYCX'],['TUMT', 'TUNT'],['FCDS', 'FCDC'],['GCQN', 'GQQN'],['VXTZ', 'VXTV'],['GETM', 'GETI'],['APZH', 'AEZH'],['ATEO', 'ATKO'],['NZXZ', 'NZUZ'],['YFFN', 'YLFN'],['OZKS', 'OZSS'],['BKNV', 'OKNV'],['HZGK', 'HJGK'],['TZAA', 'TGAA'],['BINL', 'BIIL'],['UCPR', 'UAPR'],['UQLB', 'CQLB'],['CAYK', 'NAYK'],['NNUE', 'BNUE'],['ODBD', 'ODLD'],['VFDH', 'VFDD'],['OFJH', 'OFKH'],['CPLV', 'CYLV'],['DPDC', 'DPXC'],['SOLS', 'SSLS'],['YQBX', 'YZBX'],['CBPA', 'CJPA'],['BKZP', 'NKZP'],['KLAE', 'KLAL'],['YDRN', 'YXRN'],['HDDU', 'BDDU'],['BHKJ', 'BHKG'],['YQUD', 'YNUD'],['BNVR', 'BHVR'],['FGAN', 'CGAN'],['QDMK', 'QDMN'],['UXZL', 'UXYL'],['IJYY', 'IJIY'],['FYAY', 'SYAY'],['DFZK', 'DFDK'],['MGQK', 'MGQU'],['AMDU', 'HMDU'],['LOUB', 'LOJB'],['FMHM', 'FMXM'],['SZSF', 'SKSF'],['HUVN', 'HUXN'],['GCOP', 'GBOP'],['OKEB', 'LKEB'],['OYHU', 'OGHU'],['YVCI', 'YVCE'],['OYBH', 'OUBH'],['NXKE', 'NXKZ'],['EOQK', 'EMQK'],['MPDI', 'MFDI'],['VKTZ', 'CKTZ'],['QGGG', 'QGGT'],['SHQZ', 'SXQZ'],['IGXM', 'QGXM'],['YOND', 'NOND'],['DSNF', 'DSQF'],['TGEQ', 'TGEL'],['HCJE', 'VCJE'],['IUDL', 'ICDL'],['LNBH', 'LHBH'],['PKKV', 'GKKV'],['ODFK', 'RDFK'],['ZMHO', 'ZMHK'],['VEQB', 'VEQL'],['AJOD', 'AJOX'],['SSJH', 'SSEH'],['NYIK', 'ZYIK'],['RUDG', 'RUUG'],['CVGZ', 'EVGZ'],['FGQM', 'FGQC'],['SRRU', 'SRSU'],['GEPM', 'PEPM'],['JQJP', 'JQJY'],['TOLQ', 'TOLY'],['JMQK', 'JMQX'],['RYBU', 'IYBU'],['DXPT', 'DXHT'],['PTJJ', 'PLJJ'],['JCOO', 'JDOO'],['MTON', 'ITON']]

// 6 letters
//letterCombo = [['JJEQPB', 'JJEQJB'], ['HAAOOR', 'HAADOR'], ['RMBTRD', 'RMBHRD'], ['DTVIGB', 'DKVIGB'], ['XGCEPR', 'XGCEPI'], ['DRNGHJ', 'DRNGAJ'], ['UBSDYM', 'UBUDYM'], ['QFXAHG', 'QCXAHG'], ['ZQIELD', 'ZSIELD'], ['OLEPXR', 'OLEAXR'], ['SVGTBN', 'SVGFBN'], ['PTVLZJ', 'ETVLZJ'], ['PCCPIG', 'ECCPIG'], ['PMGHJP', 'HMGHJP'], ['BPUOEM', 'BPUUEM'], ['LEYPSL', 'LEYBSL'], ['FNJFQE', 'FNJTQE'], ['JTCILC', 'JNCILC'], ['LRBIVT', 'KRBIVT'], ['AOEDJI', 'AOEUJI'], ['CVGBJV', 'ZVGBJV'], ['MDFZHZ', 'MDFZHM'], ['JYZXZJ', 'JYSXZJ'], ['OYAVAP', 'OKAVAP'], ['YNFXZZ', 'YBFXZZ'], ['PNTRRS', 'PNLRRS'], ['SEUVQI', 'SEUXQI'], ['HNBYQX', 'HNBYRX'], ['NMYCEQ', 'NMYCMQ'], ['UOCVPC', 'UOCIPC'], ['TJOPTX', 'FJOPTX'], ['BRTMZC', 'BRTMUC'], ['XBPGLN', 'XBPGLG'], ['ATRKIR', 'ATRSIR'], ['OVIQVI', 'OZIQVI'], ['EGKXEF', 'EGKXEK'], ['TVNSYZ', 'TVNBYZ'], ['PDLMQY', 'PDNMQY'], ['TYIJFZ', 'TYIJFY'], ['XSOHKJ', 'XSUHKJ'], ['OGDFLG', 'ZGDFLG'], ['VTGKKO', 'VTFKKO'], ['OYNKJB', 'ZYNKJB'], ['IABTZF', 'IABTZU'], ['KVFMSX', 'IVFMSX'], ['ADJYVC', 'TDJYVC'], ['AXVFII', 'AHVFII'], ['NQMLCQ', 'NNMLCQ'], ['KCIGVC', 'YCIGVC'], ['SAERSB', 'SKERSB'], ['ANHGGA', 'ANHGGH'], ['ADUEGH', 'ADMEGH'], ['GCZIFQ', 'GUZIFQ'], ['KGOCXN', 'KGOIXN'], ['AMGNPA', 'AMGNIA'], ['GAYZAC', 'GAYVAC'], ['ZJGFNX', 'QJGFNX'], ['DIZNBA', 'CIZNBA'], ['BIHUTJ', 'BSHUTJ'], ['NQVALQ', 'NQVALM'], ['HJLXPR', 'HJLIPR'], ['FSZGOG', 'FSXGOG'], ['TPYQTU', 'TPYQTQ'], ['RIJBGO', 'RIJCGO'], ['IFUVBF', 'IRUVBF'], ['TAVZOS', 'BAVZOS'], ['DOROYG', 'JOROYG'], ['YDGJOT', 'NDGJOT'], ['FBYTJK', 'MBYTJK'], ['HOMJXN', 'HOMGXN'], ['JGRVMF', 'JGRXMF'], ['XTUVTN', 'XTUETN'], ['TXYPYL', 'VXYPYL'], ['DFHLXX', 'YFHLXX'], ['MRZAND', 'MRZZND'], ['QMVOOK', 'QFVOOK'], ['LSCBVD', 'LSTBVD'], ['OUDNCQ', 'OUDNTQ'], ['BMJJBR', 'BMPJBR'], ['KEPUIO', 'NEPUIO'], ['CNPIQS', 'CNJIQS'], ['SJCDHA', 'LJCDHA'], ['SYJQYL', 'SYJQDL'], ['LXUAOP', 'LEUAOP'], ['XKAKLX', 'XZAKLX'], ['HIFQKK', 'HIFJKK'], ['DBYVES', 'DBPVES'], ['ZCXDMC', 'ZCXDMN'], ['FDELJY', 'FDEAJY'], ['VAXZPE', 'TAXZPE'], ['KSPOSB', 'KYPOSB'], ['JALJMG', 'JJLJMG'], ['BHLQAI', 'BHLQAM'], ['NPHOZG', 'NVHOZG'], ['SCBRNH', 'SCBRCH'], ['LZXZOX', 'LZXZOO'], ['XLELEV', 'QLELEV'], ['TQOXBT', 'TQOXAT'], ['QMONFL', 'QPONFL'], ['CIHKGV', 'CIHKEV']]

// 8 letters
//letterCombo = [['CBNTJJLA', 'HBNTJJLA'], ['DXJXEEOR', 'DXJXEVOR'], ['AKYEPYBI', 'AKYYPYBI'], ['KXKLVUMO', 'KXKLVUEO'], ['FAFYXHRQ', 'KAFYXHRQ'], ['MZKRGJFZ', 'MZKRGJPZ'], ['FGUHINFQ', 'FGUZINFQ'], ['JPZLUPXC', 'JCZLUPXC'], ['EQXDKKIT', 'EQKDKKIT'], ['HNIFUEOF', 'HNIMUEOF'], ['LBPADJLA', 'LBPADJOA'], ['AOGSENRK', 'AOLSENRK'], ['ABSXJKDX', 'ABSXUKDX'], ['ZKAPXYKL', 'ZKAUXYKL'], ['AVNGGFLQ', 'AENGGFLQ'], ['PVGHSLGM', 'PVGPSLGM'], ['EYFQRSCU', 'EYFQRSCP'], ['NRNHRQCU', 'NRNHRQUU'], ['QCCIUYEN', 'QCCIUHEN'], ['GBLRFQNP', 'GBERFQNP'], ['PKIRBUCK', 'PEIRBUCK'], ['FGLHQLBT', 'FELHQLBT'], ['QTZUODUQ', 'QZZUODUQ'], ['HTCGIAHV', 'HTCGIAZV'], ['ZKSPEAXA', 'RKSPEAXA'], ['MQXYBHVI', 'HQXYBHVI'], ['FADXKXNS', 'FADXKXNX'], ['LUROHABP', 'LUROHASP'], ['FKOTSAHN', 'FMOTSAHN'], ['ZJCVYODK', 'ZMCVYODK'], ['BEVHDABH', 'BEVHDRBH'], ['SAJHHRIM', 'LAJHHRIM'], ['XHOJBQPG', 'XHHJBQPG'], ['BMUNJHGZ', 'BMUNJXGZ'], ['FJDVFVIJ', 'FADVFVIJ'], ['BIEZYAPR', 'BIEZNAPR'], ['YYCAYAOT', 'YYCAYAGT'], ['YJRJBXXX', 'YIRJBXXX'], ['QENOAPIU', 'QENOAMIU'], ['JEZLMCHX', 'JEZLDCHX'], ['BXEEUGOD', 'BXEERGOD'], ['SHUXDCMT', 'SHUKDCMT'], ['KNOXRCHP', 'KNOXRCOP'], ['QZDCGHLX', 'QZDJGHLX'], ['NVXAVVAN', 'NVXEVVAN'], ['GOMDJHNL', 'GOMVJHNL'], ['ZHEINLNS', 'ZHEINNNS'], ['UFKYJSVF', 'UFKYJSVO'], ['TIZVZQZT', 'TIZVZEZT'], ['RBQLFJYQ', 'RBQLFJXQ'], ['VBEYQOMC', 'VBEYQOJC'], ['MMNPZKOU', 'MMPPZKOU'], ['GKSTAOGQ', 'GKSTAOGV'], ['ZTHKTCKB', 'FTHKTCKB'], ['MLHXGINN', 'MLHXGDNN'], ['PSMFOSMQ', 'PSMSOSMQ'], ['HVICBSQG', 'HVICBSLG'], ['UDLPLIJZ', 'UDVPLIJZ'], ['DGFAUTTN', 'DGFAUTTO'], ['SVXYNJOC', 'SSXYNJOC'], ['BCYCGFCL', 'BCYMGFCL'], ['FYVMYHVU', 'FYVMYHVF'], ['ETMFKTSR', 'ETLFKTSR'], ['PLNFJSLC', 'PGNFJSLC'], ['ZGIASGXO', 'ZGIASGLO'], ['CYJRPJBD', 'CYJRPTBD'], ['TRVHTZCV', 'TRVHTZBV'], ['FRZOEIZT', 'FRZDEIZT'], ['IAZZKIVQ', 'OAZZKIVQ'], ['FZKQVDDY', 'FZKYVDDY'], ['GMCDFUCZ', 'XMCDFUCZ'], ['EBTEMNFH', 'ZBTEMNFH'], ['ECVEYUQN', 'ECVEYUYN'], ['BPEOJGJV', 'BYEOJGJV'], ['SLKHEDBP', 'SLKDEDBP'], ['MZYAGOJA', 'MZYAYOJA'], ['KOCKGXKS', 'KOCKGXKO'], ['ZOUCMNVE', 'DOUCMNVE'], ['CKCKJPHB', 'CTCKJPHB'], ['JZJURLYM', 'JZJULLYM'], ['HSTKZZZN', 'HSTYZZZN'], ['DIMQRLIS', 'DIMQRLGS'], ['UXOSKCZQ', 'UMOSKCZQ'], ['TDHOQKLZ', 'DDHOQKLZ'], ['UGPJDZPT', 'UGPJDQPT'], ['NNNNSUNR', 'NNNNSGNR'], ['SIZHTMIV', 'LIZHTMIV'], ['KSTJUZAS', 'KSTJUZPS'], ['GJGUXVFB', 'GJGUXMFB'], ['CCIDTYHU', 'CCYDTYHU'], ['UJOOXJHJ', 'UIOOXJHJ'], ['AKAHLJVB', 'AKAHLKVB'], ['LHSPPMKM', 'LHSPPMMM'], ['FLXKEEKU', 'NLXKEEKU'], ['MNTFUITO', 'MNTFUGTO'], ['UYTTDEFG', 'UYLTDEFG'], ['LMIDZTUV', 'LMIDITUV'], ['ZMDACMHN', 'ZMDNCMHN'], ['FKZIPSCL', 'FKUIPSCL'], ['QLAHNVZG', 'QLAHNYZG']]

// 10 letters
letterCombo = [['BLBOITDRRO', 'BLBZITDRRO'], ['JXENDRARNI', 'JXLNDRARNI'], ['GUFDPDATXR', 'AUFDPDATXR'], ['VSGZQPOUKJ', 'VSGZQPOCKJ'], ['ZESZNNKCRO', 'ZESZNNHCRO'], ['QBSSZTPPXR', 'QBSSZTPPXI'], ['UOFFSYNGOK', 'UOFFSKNGOK'], ['EHATTGAKUF', 'EHATGGAKUF'], ['TZGSMDJUXQ', 'TZGRMDJUXQ'], ['VQLZFVLHYI', 'VQLZFVLHSI'], ['YHXKNNSQSX', 'HHXKNNSQSX'], ['HYBQSLYPVJ', 'HYBQSLYPVZ'], ['FSRPFSPESQ', 'FSRPFSPNSQ'], ['CSEIDAHOBO', 'CSEIDOHOBO'], ['QZOALXTRDS', 'QZOALXTRDK'], ['OSUDEPTZCP', 'OSPDEPTZCP'], ['NOFBBUJJQG', 'YOFBBUJJQG'], ['QBJILTOFZT', 'BBJILTOFZT'], ['GAFREDRARF', 'GAFRIDRARF'], ['ANGBMAEUAG', 'ANGJMAEUAG'], ['RKBOHPKDXD', 'RKOOHPKDXD'], ['QVNCZXIHNA', 'QVNCHXIHNA'], ['TYRTLIHEJG', 'TYXTLIHEJG'], ['OZUHLNXZLO', 'OZUHLNXZLZ'], ['BIQIAZDCNK', 'BIQIAZDPNK'], ['LGKCYHVMSJ', 'LGKCFHVMSJ'], ['CIULHDTDDR', 'CIULHDFDDR'], ['HXPSTCOJYE', 'HXPSTCOJYP'], ['RNRJLFTIHH', 'XNRJLFTIHH'], ['JDCLKITDOT', 'JDCDKITDOT'], ['FXOCYEALEF', 'FXOCYEALEM'], ['OSPDSTLFIX', 'OIPDSTLFIX'], ['EPHNQTFRUM', 'EPHNQCFRUM'], ['NOPNVNZULO', 'NOPNVVZULO'], ['INOJKHRTPZ', 'INOJKHRTEZ'], ['ONBPXUCCHE', 'ONBPXUUCHE'], ['QKQZCKZEYG', 'QKQZCLZEYG'], ['RUPBXIXAFY', 'RUPBXIXAFF'], ['OOUIINQSHG', 'OOUIINJSHG'], ['YVLHIFJVTJ', 'YVLHIFSVTJ'], ['MOFCKPAPVN', 'MOFPKPAPVN'], ['KUYMSGTOUH', 'KUYMSGTOVH'], ['QALDPQMZCN', 'OALDPQMZCN'], ['KLOBAUXFDC', 'KLBBAUXFDC'], ['XLREMRKQNS', 'XLREMRKQNY'], ['GTQAKFOBFS', 'GTQJKFOBFS'], ['TDIVPRDEZT', 'TJIVPRDEZT'], ['APCMEVVHTS', 'AFCMEVVHTS'], ['YRUJATURHH', 'YRUJATUQHH'], ['IZMDTDADKK', 'IZGDTDADKK'], ['MXAMUEKBGA', 'MXAMUEKBGE'], ['NYGOXPFYEO', 'NYGOXFFYEO'], ['ZNYZRJAROL', 'ZIYZRJAROL'], ['BIFQENLKXR', 'BDFQENLKXR'], ['LNURCSQBTO', 'LNURCSBBTO'], ['DSTGFODPPD', 'DSTGFXDPPD'], ['ZXQDUDYRKK', 'XXQDUDYRKK'], ['CMGOYKNEVG', 'CMGOYKIEVG'], ['ECLJMJVNGA', 'ECLJMJVNGJ'], ['ICFEQMLEYM', 'ZCFEQMLEYM'], ['HSGFENQGQV', 'HSGFENQGQQ'], ['AYUBFJLHFR', 'AYUBEJLHFR'], ['JMVLARMGMZ', 'HMVLARMGMZ'], ['VVIXONXIMO', 'VVIXOXXIMO'], ['LGUAEMGDOO', 'LXUAEMGDOO'], ['SXSLZCESMJ', 'KXSLZCESMJ'], ['ODPYUTQPAZ', 'ODPYUTRPAZ'], ['UUHVHMFCCD', 'UUHVHMFKCD'], ['YBXYUEAVTQ', 'YBXYUEAVTN'], ['HZUCZMUYAD', 'HZUCZMPYAD'], ['NZXQDKDJYD', 'NZXQDKBJYD'], ['BJGXLGYPOG', 'BJGXLGYPNG'], ['PCRZKTTLXV', 'UCRZKTTLXV'], ['HICCIKYKDY', 'HICCIKYJDY'], ['YHMBUHIMTS', 'EHMBUHIMTS'], ['HPEJEVIKVY', 'HPBJEVIKVY'], ['MURILGFPPI', 'MURILGFPPR'], ['AAGDSEAUUD', 'AAGDSEMUUD'], ['KFKSSSINGZ', 'KFKSMSINGZ'], ['VVNGCUQGXO', 'VVNICUQGXO'], ['CVGZPUXJEP', 'VVGZPUXJEP'], ['QPKZNRRPII', 'QPKZNRRPIA'], ['MNJREMMQHP', 'MGJREMMQHP'], ['QOGPQLAGDY', 'MOGPQLAGDY'], ['BQJBUTINKD', 'BQJBUTISKD'], ['AJMKGKRQPH', 'AJMKGKRQPQ'], ['OCYOXQHHHH', 'OCYKXQHHHH'], ['PPEOJOTICE', 'PPEOJOTICH'], ['SKMAXRDIFM', 'IKMAXRDIFM'], ['TQQCVSPKKK', 'TQQCVSPKLK'], ['RSKEDAGJDD', 'RSKEDAGJDI'], ['SUJXRKLPII', 'SUJDRKLPII'], ['YILMYOBQYP', 'YILMYOBCYP'], ['YLZLREZJBJ', 'YCZLREZJBJ'], ['BQSKQCMQCO', 'BOSKQCMQCO'], ['MBBPJPMYCD', 'MBBPJPMICD'], ['JNHYTXAHKH', 'JNHYRXAHKH'], ['GMXBIXZDSL', 'GMXBIXQDSL'], ['CPEBAXPLHU', 'CPEBVXPLHU'], ['TLCQTZOLAQ', 'TVCQTZOLAQ']]
	


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

		setTimeout(noise, 500)
		setTimeout(question, 1000)


		globalListCounter +=1
	}
	else {
		//TESTING DONE!!!
		viewChanger("end")
		JsonExport = globalListOfData

		// https://stackoverflow.com/questions/33780271/export-a-json-object-to-a-text-file

		const filename = id + '.txt';
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

