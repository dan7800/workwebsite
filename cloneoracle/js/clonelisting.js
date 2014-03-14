jQuery(document).ready(function() {
  jQuery(".content").hide();
  //toggle the componenet with class msg_body
  jQuery(".heading").click(function()
  {
    jQuery(this).next(".content").slideToggle(500);
  });
});


// Display a counter on the clones
var cloneCounter = 0;
function updateCounter() {
    cloneCounter = cloneCounter+1;
    document.write(cloneCounter+") ");
}


function getAllCloneInfo(input) {
    return input;
}

function writeTop(input){
     var retVal="<ul>";
		retVal+="<li class=\"first\">First Item1</li>";
		retVal+="<li class=\"second\">Second Item</li>";
	retVal+="</ul>";
  
    return retVal;
    
}



function getClass1(input) {
    var res = input.split("()")[0];
    var res2 = res.split(".")[0];
    return res2;
}

function getClass2(input) {
    var res = input.split("()")[1];
    var res2 = res.split(".")[0];
    res2 = res2.substring(1);
    return res2;
}

function getMethod1(input) {
    var res = input.split("()")[0];
    var res2 = res.split(".")[1];
    return res2;
}

function getMethod2(input) {
    var res = input.split("()")[1];
    var res2 = res.split(".")[1];
    return res2;
}

function getGroupInfo1(input) {
    return getClass1(input) + "." + getMethod1(input) + "()";
}

function getGroupInfo2(input) {
    return getClass2(input) + "." + getMethod2(input) + "()";
}

function cloneTypeText(typeID){
    return "Type " + typeID + " Clone"; 
}
