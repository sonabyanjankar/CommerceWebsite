var n=0; 
//image preloading 
			var Img = new Array(3);
      		for (var i=0; i<Img.length; i++)
      			Img[i] = new Image(1200,600);
      			
      		Img[0].src="images/banner8.png";
      		Img[1].src="images/banner9.png";
      		Img[2].src="images/banner10.png";
      		
      		      		
      		Img[0].alt="banner8";
      		Img[1].alt="banner9";
      		Img[2].alt="banner10";
      		
      		
      		setInterval("slideShow1()",3000);
      		
      		function slideShow1(){
      			n++
      			if(n>=Img.length) n=0;
      			document.getElementById("banner").src=Img[n].src;
      		}
      		
  