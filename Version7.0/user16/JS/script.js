function myText() {
    document.getElementById("myText").innerHTML = "Hey <strong>Thanks!</strong>";
}
var space = " ";
var pos = 0;
var msg = "FREE MONEY";



function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 0);
}
Scroll();

function myFunction() {
    document.getElementById("puppy").innerHTML = "Hello World";
}

function show_coords(event) {
    document.getElementById("old").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}

function isKeyPressed(event) {
    var text = "The shift key was NOT pressed!";
    if (event.shiftKey == 1) {
        text = "The shift key was pressed!";
    }
    document.getElementById("demo").innerHTML = text;
}

function displayDate() {
    document.getElementById("raw").innerHTML = Date();
}

function coordinates(event) {
    document.getElementById("apple").innerHTML = "X = " + event.screenX + "<br>Y = " + event.screenY;
}

function whichButton(event) {
    document.getElementById("peach").innerHTML = event.keyCode;
}

function myFunction(x) {
    x.style.background = "green";
}

function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
}