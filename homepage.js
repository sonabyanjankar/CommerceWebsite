var o=0;
 
      		var Img = new Array(4);
      		for (var i=0; i<Img.length; i++)
      			Img[i] = new Image(1200,500);
      			
      		Img[0].src="images/menbanner1.jpg";
      		Img[1].src="images/menbanner2.png";
      		Img[2].src="images/menbanner3.png";
      		Img[3].src="images/menbanner4.png";
      		
      		      		
      		Img[0].alt="menbanner1";
      		Img[1].alt="menbanner2";
      		Img[2].alt="menbanner3";
      		Img[3].alt="menbanner4";

      
      		setInterval("slideShow()",2000);
      		
      		
      		function slideShow(){
      			o++;
      			if(o>=Img.length) o=0;
      			document.getElementById("img").src=Img[o].src;
      		
}

			function LengthConverter(valNum) {
 			 document.getElementById("outputcm").innerHTML=valNum/0.39370;
}