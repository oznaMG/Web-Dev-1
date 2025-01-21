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

   $(document).ready(function(){
    // When mouse enters the box bounds, determine the closest edge and move the block
    $(".box-bounds").mouseenter(function(e) {
        closestEdge(e, this);
    });

    $(document).ready(function() {
      // Handle mouseenter to move the block
      $(".box-bounds").mouseenter(function(e) {
          closestEdge(e, this);
      });
  
      // Change cursor to "grab" on hover
      $(".box-bounds").hover(
          function() {
              $(this).css("cursor", "grab");
          },
          function() {
              $(this).css("cursor", "default");
          }
      );
  
      // Add a click event to the box bounds
      $(".box-bounds").on("click", function() {
          alert("DONT TOUCH ME THERE");
  
          // Play the audio file
          const audio = document.getElementById("clickSound");
          audio.currentTime = 0; // Reset audio to start
          audio.play(); // Play audio
      });
  });
  
  function moveDiv(mouse, edge, elem) {
      const width = $(elem).outerWidth();
      const height = $(elem).outerHeight();
  
      switch (edge) {
          case "left":
              $(elem).css({ left: mouse.pageX + 4 });
              break;
          case "right":
              $(elem).css({ left: mouse.pageX - width - 4 });
              break;
          case "top":
              $(elem).css({ top: mouse.pageY + 4 });
              break;
          case "bottom":
              $(elem).css({ top: mouse.pageY - height - 4 });
              break;
      }
  }
  
  function closestEdge(mouse, elem) {
      const elemBounding = elem.getBoundingClientRect();
  
      const elementLeftEdge = elemBounding.left;
      const elementTopEdge = elemBounding.top;
      const elementRightEdge = elemBounding.right;
      const elementBottomEdge = elemBounding.bottom;
  
      const mouseX = mouse.pageX;
      const mouseY = mouse.pageY;
  
      const topEdgeDist = Math.abs(elementTopEdge - mouseY);
      const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
      const leftEdgeDist = Math.abs(elementLeftEdge - mouseX);
      const rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  
      const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
  
      let position;
  
      switch (min) {
          case leftEdgeDist:
              position = "left";
              break;
          case rightEdgeDist:
              position = "right";
              break;
          case topEdgeDist:
              position = "top";
              break;
          case bottomEdgeDist:
              position = "bottom";
              break;
      }
  
      moveDiv(mouse, position, elem);
  }
})  