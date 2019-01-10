$(document).ready(function() {
  var size = 50;
  console.log("selecting random images...")
  var images = ['face-1.jpg', 'face-2.jpg', 'face-3.jpg', 'face-4.jpg', 'face-5.jpg', 'face-6.jpg', 'face-7.jpg'];
  for (i=0; i>size; i++)  {
    console.log("https://raw.githubusercontent.com/JEFF-BRIDGES99/JEFF-BRIDGES99.github.io/master/img/" + Math.floor(Math.random()*images.length));
  } 
});
