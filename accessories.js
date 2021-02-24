 function displayFull(s){
      			document.getElementById("imgCover").src=fullImg[s].src;
      		}
      		//image preloading 
      		var fullImg = new Array(6);
      		for (var i=0; i<fullImg.length; i++)
      			fullImg[i] = new Image(289,373);
      			
      		fullImg[0].src= "images/ac3.png" ;
      		fullImg[1].src="images/ac6.png";
      		fullImg[2].src="images/acc5.png";
      		fullImg[3].src="images/belt.jpg";
      		fullImg[4].src="images/ac2.png";
      		fullImg[5].src="images/acc8.png";
      		
      		fullImg[0].alt="glasses";
      		fullImg[1].alt="hats";
      		fullImg[2].alt="socks";
      		fullImg[3].alt="belts";
      		fullImg[4].alt="necklaces";
      		fullImg[5].alt="keychain";
      	
      	     	function start()
	      	{	
	      		document.getElementById("glasses").addEventListener("click",function(){displayFull(0);}, false);
	      		document.getElementById("hats").addEventListener("click",function(){displayFull(1);}, false);
				document.getElementById("socks").addEventListener("click",function(){displayFull(2);}, false);
				document.getElementById("belts").addEventListener("click",function(){displayFull(3);}, false);
				document.getElementById("necklaces").addEventListener("click",function(){displayFull(4);}, false);
				document.getElementById("keychain").addEventListener("click",function(){displayFull(5);}, false);
			}
			window.addEventListener("load",start, false);
