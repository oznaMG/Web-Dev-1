function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }
function changeText2() {
    document.getElementById("textChange").innerHTML="Uh, why would you do that?";
   }
function changeText3() {
    document.getElementById("textChange").innerHTML="You already know my name. Refresh the webpage if you keep forgetting.";
   }
function changeText4() {
    document.getElementById("textChange").innerHTML="Then what are you doing here?";
   }
function changeText5() {
    document.getElementById("textChange").innerHTML="Aw, thank you. 😉";
   }
var space = " ";
var pos = 0;
var msg = "https://bit.ly/rushe333";
   
function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);
   
pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();