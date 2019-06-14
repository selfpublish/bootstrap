var xs = document.querySelector(".xs .row");
var sm = document.querySelector(".sm .row");
var md = document.querySelector(".md .row");
var lg = document.querySelector(".lg .row");
var xl = document.querySelector(".xl .row");

var inputs = document.getElementsByTagName("input");

var colXS = new RegExp(/(col\-[0-9]+)\b/g);
var colOther = new RegExp(/(col\-[a-z]+\-[0-9]+)\b/g);
var marginNoMQ = new RegExp(/m[a-z]-auto/g);
var marginNoMQ0 = new RegExp(/m[a-z]*-0/g);
var marginMQ = new RegExp(/m[a-z]-[a-z]+-auto/g);
var marginX0 = new RegExp(/m[a-z]*-[a-z]+-0/g);
// var noMargin = new RegExp(/m[a-z]*-0/g)
// var noMarginMQ = new RegExp(/m[a-z]*-[a-z]+-0/g)

var tempArray = [];

var newColXS = "";
var newColSM = "";
var newColMD = "";
var newColLG = "";
var newColXL = "";
var margin = '';
var marginDir = '';
var marginSuffix = '-auto';

var breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

function interpret() {
  
  xs.innerHTML = "";
  sm.innerHTML = "";
  md.innerHTML = "";
  lg.innerHTML = "";
  xl.innerHTML = "";

	for(var i = 0; i < inputs.length; i++) {

		newColXS = "\<div class\=\'col-12\'\/\>";
		newColSM = "\<div class\=\'col-12\'\/\>";
		newColMD = "\<div class\=\'col-12\'\/\>";
		newColLG = "\<div class\=\'col-12\'\/\>";
		newColXL = "\<div class\=\'col-12\'\/\>";

		if(inputs[i].value != '') {
      
			tempArray = inputs[i].value.split(" ");
      
			for(var k = 0; k < tempArray.length; k++) {
        
        if(marginNoMQ.test(tempArray[k]) || marginNoMQ0.test(tempArray[k])) {
          margin = 'xs';
          marginDir = tempArray[k].split('-')[0];
          marginSuffix = "-" + tempArray[k].split('-')[1];
        }
        if(marginMQ.test(tempArray[k]) || marginX0.test(tempArray[k])) {
          marginDir = tempArray[k].split('-')[0];
          margin = tempArray[k].split('-')[1];
          if(tempArray[k].split('-')[2] == '0') {
            marginSuffix = '-0';
          } else {
            marginSuffix = '-' + tempArray[k].split('-')[2];
          }
        }
        //end layout classes
        
				if(colXS.test(tempArray[k]) == true) {
            newColXS = "\<div class\=\'" + tempArray[k] + "\'\/\>";
            newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
            newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
            newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
            newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
				};
        if(margin != '') {
        	if(marginSuffix != '-0') {
        newColXS = newColXS.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
		newColSM = newColSM.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
	    newColMD = newColMD.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
	    newColLG = newColLG.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
	    newColXL = newColXL.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
	    		}
          if(margin == 'sm') {
            newColSM = newColSM.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColMD = newColMD.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColLG = newColLG.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColXL = newColXL.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
          }
          if(margin == 'md') {
            newColMD = newColMD.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColLG = newColLG.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColXL = newColXL.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
          }
          if(margin == 'lg') {
            newColLG = newColLG.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
            newColXL = newColXL.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
          }
          if(margin == 'xl') {
            newColXL = newColXL.split("\'\/\>").join(" " + marginDir + marginSuffix + "\'\/\>");
          }
         
          if(newColXS.includes(" mx-0") || newColXS.includes(" ml-0") || newColXS.includes(" mr-0")) {
            if(newColXS.includes(" mx-auto") && newColXS.includes(" mr-0")) {
              newColXS = newColXS.split(" mx-auto").join(" ml-auto");
            } else if (newColXS.includes(" mx-auto") && newColXS.includes(" ml-0")) {
              newColXS = newColXS.split(" mx-auto").join(" mr-auto");
            } else {
          	newColXS = newColXS.split(" mx-auto").join("");
            }
          }
          if(newColSM.includes(" mx-0") || newColSM.includes(" ml-0") || newColSM.includes(" mr-0")) {
            if(newColSM.includes(" mx-auto") && newColSM.includes(" mr-0")) {
              newColSM = newColSM.split(" mx-auto").join(" ml-auto");
            } else if (newColSM.includes(" mx-auto") && newColSM.includes(" ml-0")) {
              newColSM = newColSM.split(" mx-auto").join(" mr-auto");
            } else {
            newColSM = newColSM.split(" mx-auto").join("");
            }
          }
          if(newColMD.includes(" mx-0") || newColMD.includes(" ml-0") || newColMD.includes(" mr-0")) {
            if(newColMD.includes(" mx-auto") && newColMD.includes(" mr-0")) {
              newColMD = newColMD.split(" mx-auto").join(" ml-auto");
            } else if(newColMD.includes(" mx-auto") && newColMD.includes(" ml-0")) {
              newColMD = newColMD.split(" mx-auto").join(" mr-auto");
            } else {
            newColMD = newColMD.split(" mx-auto").join("");
            }
          }
          if(newColLG.includes(" mx-0") || newColLG.includes(" ml-0") || newColLG.includes(" mr-0")) {
            if(newColLG.includes(" mx-auto") && newColLG.includes(" mr-0")) {
              newColLG = newColLG.split(" mx-auto").join(" ml-auto");
            } else if(newColLG.includes(" mx-auto") && newColLG.includes(" ml-0")) {
              newColLG = newColLG.split(" mx-auto").join(" mr-auto");
            } else {
            newColLG = newColLG.split(" mx-auto").join("");
            }
          }
          if(newColXL.includes(" mx-0") || newColXL.includes(" ml-0") || newColXL.includes(" mr-0")) {
            if(newColXL.includes(" mx-auto") && newColXL.includes(" mr-0")) {
              newColXL = newColXL.split(" mx-auto").join(" ml-auto");
            } else if(newColXL.includes(" mx-auto") && newColXL.includes(" ml-0")) {
              newColXL = newColXL.split(" mx-auto").join(" mr-auto");
            } else {
            newColXL = newColXL.split(" mx-auto").join("");
            }
          }
        }
        
				if(colOther.test(tempArray[k]) == true) {
          
          //layout classes
          if(tempArray.indexOf("mx-auto") > -1) {
            tempArray[k] = tempArray[k] + " mx-auto";
          }
          if(tempArray.indexOf("ml-auto") > -1) {
            tempArray[k] = tempArray[k] + " ml-auto";
          }
          if(tempArray.indexOf("mr-auto") > -1) {
            tempArray[k] = tempArray[k] + " mr-auto";
          }
          //end layout classes
          
					if(tempArray[k].includes("-xs-") == true) {
						tempArray[k] = tempArray[k].replace("-xs-", "-");
						newColXS = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					};
					if(tempArray[k].includes("-sm-") == true) {
						tempArray[k] = tempArray[k].replace("-sm-", "-");
						newColSM = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					};
					if(tempArray[k].includes("-md-") == true) {
						tempArray[k] = tempArray[k].replace("-md-", "-");
						newColMD = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					};
					if(tempArray[k].includes("-lg-") == true) {
						tempArray[k] = tempArray[k].replace("-lg-", "-");
						newColLG = "\<div class\=\'" + tempArray[k] + "\'\/\>";
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					};
					if(tempArray[k].includes("-xl-") == true) {
						tempArray[k] = tempArray[k].replace("-xl-", "-");
						newColXL = "\<div class\=\'" + tempArray[k] + "\'\/\>";
					};
				};
				
        // console.log(newColXS, newColSM, newColMD, newColLG, newColXL);

				colXS.lastIndex = 0;
				colOther.lastIndex = 0;
				marginNoMQ.lastIndex = 0;
				marginNoMQ0.lastIndex = 0;
				marginMQ.lastIndex = 0;
				marginX0.lastIndex = 0;
			};
      
			xs.innerHTML = xs.innerHTML + newColXS;
			sm.innerHTML = sm.innerHTML + newColSM;
			md.innerHTML = md.innerHTML + newColMD;
			lg.innerHTML = lg.innerHTML + newColLG;
			xl.innerHTML = xl.innerHTML + newColXL;

			newColXS = "";
			newColSM = "";
			newColMD = "";
			newColLG = "";
			newColXL = "";
		    margin = '';
		    marginDir = '';
		    marginSuffix = '-auto';
		    tempArray = [];
      
		};

	};

};

function clearAll() {
  for(var m=0; m < inputs.length; m++) {
    inputs[m].value = "";
  }

  xs.innerHTML = "";
  sm.innerHTML = "";
  md.innerHTML = "";
  lg.innerHTML = "";
  xl.innerHTML = "";
  
}