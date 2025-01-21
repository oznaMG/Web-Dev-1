function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}


function revertText() {
    document.getElementById("textChange").innerHTML = "My name is Isaac";
    document.getElementById("textChange").style

}

var space = " ";
var pos = 0;
var msg = "JavaScript Bozo";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();