function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();


//java function 1
function show_coords(event) {
  document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}
//java function 2
function myFunction() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
//java functino 3
function myfunc() {
  document.getElementById("sup").innerHTML = "Hello World";
}
//java function 4 and 5 are in the html as the mouseover and mouseout function
//javafunction 6
function myf() {
  const x = document.getElementById("gname");
  x.value = x.value.toUpperCase();
}
//javafunction 7
function confirmInput() {
  hname = document.forms[0].hname.value;
  alert("hello, " + hname + ". you have angered the gods. prepare for their wrath.");
}
//javafunction 8!!! lets go!!!
function myfunk() {
  alert("greetings, mortal. we have anticipated your arrival since the dawn of time.");
}