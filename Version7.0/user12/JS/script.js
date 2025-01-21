function changeText() {
    document.getElementById("textChange").innerHTML = "Thanks for liking my Webpage";
}

var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout(Scroll, 100);
}
Scroll();

function confirmInput(event) {
    fname = document.forms[0].fname.value;
    if (fname.trim() === '') {
        alert('Please enter your name.');
        event.preventDefault();
        return false;
    }

    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");


    upperCase();

    setTimeout(function () {
        window.location.href = "https://www.w3schools.com/";
    }, 2000);

    return true;
}


function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


function changeBackgroundColor() {
    document.body.style.backgroundColor = '#dcdcdc';
}


function toggleVisibility() {
    var content = document.getElementById('toggleContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}


function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var count = 10;
    var countdownInterval = setInterval(function () {
        countdownElement.textContent = 'Time left: ' + count + ' seconds';
        count--;
        if (count < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Time is up!';
        }
    }, 1000);
}


function changeTextColor() {
    var textElement = document.getElementById('textChange');
    textElement.style.color = 'red';
}


function toggleBackgroundColor() {
    var currentColor = document.body.style.backgroundColor;
    if (currentColor === 'rgb(220, 220, 220)') {
        document.body.style.backgroundColor = 'lightblue';
    } else {
        document.body.style.backgroundColor = '#dcdcdc';
    }
}
