//Globally declare variables 
  var wins = 0;
  var losses = 0;
  var targetNumber;
  var counter = 0;
  var crystalImages = ['yellow.png', 'blue.png', 'red.png', 'green.png'];
  var numberOptions;

//function to reset stats of game
function startGame () {
    //Declare variables to be reset on win/lose
    counter = 0;
    crystalValue = 0;
    scoreCounter = 0;
    numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    //append text
    $("#scoreCounter").text(counter);

    $("#crystals").html('');
    //create target number to be random between 19-120 and add to html
    targetNumber = Math.floor(Math.random() * 101) + 19;

    $(".targetNumber").text(targetNumber); 
    
    //loop to create images based on image loop that have data values randomly chosen from numberOptions. 
    //Added splice so numbers can only be chosen once
    for (var i = 0; i < 4; i++) {

    var imageCrystal = $("<img src=" + 'assets/images/' + crystalImages[i] + ">").addClass("crystalImage").attr("data-crystalvalue", numberOptions.splice(Math.random() * numberOptions.length,1)[0]);

    $("#crystals").append(imageCrystal);

  }
}
  startGame ();
  //Create onclick function for the images that grabs their data and adds it to the counter/
  $(document).on('click','.crystalImage',function(){
 
   		var crystalValue = ($(this).data("crystalvalue"));

    	counter = counter + crystalValue;

    	$("#scoreCounter").text(counter);

    	console.log("New score: " + counter);
      //Create Win/Lose Conditions
    	if (counter === targetNumber) {
    		wins++;
       	 	alert("You win!");
      		startGame();
    	}

    	else if (counter > targetNumber) {
    		losses++;
      		alert("You lose!!");
      		startGame();
   		}
   	//inject win/lose html to document
    var html = "<p>Wins: " + wins + "</p>" +
			   "<p>Losses: " + losses + "</p>";

	  $(".results").html(html);


});