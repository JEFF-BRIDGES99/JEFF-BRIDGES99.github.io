$(document).ready(function() {
  var size = 50;
	var url = "";
  console.log("selecting random images...")
  var images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", ];
  for (i=0; i<size; i++)  {
		url = "https://raw.githubusercontent.com/JEFF-BRIDGES99/JEFF-BRIDGES99.github.io/master/img/" + Math.floor(Math.random()*images.length) + ".png"
    console.log(url);
		$('#image-container').append("<a><img src=" + url + "></img></a>")
  } 
});
