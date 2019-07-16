$(document).ready(function() {



	var compPick = Math.floor(Math.random() * 120) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

	var crystalone = Math.floor(Math.random() * 12) + 1; 
		 $("#img1").html("<img src=" + "assets/images/onecrystal.jpg" + " value=" + crystalone + ">"); 

	var crystaltwo = Math.floor(Math.random() * 12) + 1; 
		$("#img2").html("<img src=" + "assets/images/twocrystal.png" + " value=" + crystaltwo + ">"); 

	var crystalthree = Math.floor(Math.random() * 12) + 1; 
		$("#img3").html("<img src=" + "assets/images/threecrystal.png" + " value=" + crystalthree + ">");
	
    var crystalfour = Math.floor(Math.random() * 12) + 1; 
        $("#img4").html("<img src=" + "assets/images/fourcrystal.jpg" + " value=" + crystalfour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		compPick = Math.floor(Math.random() * 120) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
        $(".scoreDisplay").html(score); 
        
        var crystalone = Math.floor(Math.random() * 12) + 1; 
        $("#img1").html("<img src=" + "assets/images/onecrystal.jpg" + " value=" + crystalone + ">"); 

   var crystaltwo = Math.floor(Math.random() * 12) + 1; 
       $("#img2").html("<img src=" + "assets/images/twocrystal.png" + " value=" + crystaltwo + ">"); 

   var crystalthree = Math.floor(Math.random() * 12) + 1; 
       $("#img3").html("<img src=" + "assets/images/threecrystal.png" + " value=" + crystalthree + ">");
   
   var crystalfour = Math.floor(Math.random() * 12) + 1; 
       $("#img4").html("<img src=" + "assets/images/fourcrystal.jpg" + " value=" + crystalfour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
