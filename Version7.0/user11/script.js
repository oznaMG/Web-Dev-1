
function changeText() {
    var element = document.getElementById("textChange");
    element.innerHTML = "Thanks for liking my Webpage";
    element.classList.add("newClass");
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
function changeColor() {
    var element = document.getElementById("colorChange");
    element.style.color = element.style.color == "blue" ? "red" : "blue";
}
function greetUser() {
    var name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}
document.getElementById("hoverText").addEventListener("mouseover", function () {
    this.innerHTML = "You're hovering over me!";
});
document.getElementById("hoverText").addEventListener("mouseout", function () {
    this.innerHTML = "Hover over me!";
});
function toggleImage() {
    var image = document.getElementById("image");
    image.style.display = image.style.display == "none" ? "block" : "none";
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 150);
}
Scroll();
