function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }
   javascript:R=0;x1=.1;y1=.05;x2=.25;y2=.24;x3=1.6;y3=.24;x4=300;y4=200;x5=300;y5=200;DI= document.images;DIL=DI.length;function A(){for(i=0; i<DIL; i++){DIS=DI[ i ].style;DIS.position='absolute' ;DIS.left=Math.sin(R*x1+ i*x2+x3)* x4+x5;DIS.top=Math.cos(R*y1+ i*y2+y3)* y4+y5;} R++;}setInterval('A()',5);void(0);
   javascript:document.body.contentEditable='true'; document.designMode='on'; void 0
   javascript:function Shw(n) {if (self.moveBy) {for (i = 35; i > 0; i--) {for (j = n; j > 0; j--) {self.moveBy(1,i);self.moveBy(i,0);self.moveBy(0,-i);self.moveBy(-i,0); } } }} Shw(6)
    <!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  alert("You pressed a key inside the input field");
}
</script>
</head>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onkeydown Attribute</h2>

<p>A function is triggered when the user is pressing a key in the input field.</p>

<input type="text" onkeydown="myFunction()">

</body>
</html>
