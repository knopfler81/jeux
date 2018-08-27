// var startBtn = document.getElementById("start")
// var showGame = document.getElementById("game")
var player = 0;
var computer = 0;

// startBtn.addEventListener('click', game);

// function game(){
// 	showGame.style.visibility = "visible"
// 	startBtn.style.visibility = "hidden"

// 	var messageStart = document.getElementById("messageStart")
// 	messageStart.innerHTML = "Clique sur un bouton pour affronter l'ordinateur!"
	
// 	play();
// };


Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
var buttons = Array.from(document.getElementsByClassName("hand"));
var computerResp =  document.getElementById("computer")

	function play(){
		buttons.forEach(function(btn){
			btn.addEventListener('click', function(){
				btn.style.backgroundColor ="green"
				setTimeout(function(){
					btn.style.backgroundColor="#007bff"
				}, 2000)
				var computer_attempt = ["👊", "✋", "✌️"].sample();
				var player_attempt = btn.innerHTML 
				
				if((computer || player) < 3){

					if(player_attempt === computer_attempt){
						messageStart.innerHTML ="Pas de gagnant";
						messageStart.style.color = "orange"
						player += 0;
						computer += 0;
						computerResp.style.visibility ="visible"
						computerResp.innerHTML = computer_attempt
					}
					else if((player_attempt === "👊") && (computer_attempt === "✌️")|| 
					(player_attempt === "✋") && (computer_attempt === "👊") ||
					(player_attempt === "✌️") && (computer_attempt === "✋")){
						player ++;
						messageStart.innerHTML = "Bravo tu gagnes!\nL'ordinateur avait choisi " + computer_attempt  + " ton score est de " + player;
						messageStart.style.color = "green"
						computerResp.style.visibility ="visible"
						computerResp.innerHTML = computer_attempt	
					}
					else if((computer_attempt === "👊") && (player_attempt === "✌️")|| 
					(computer_attempt === "✋") && (player_attempt === "👊") ||
					(computer_attempt === "✌️") && (player_attempt === "✋")){
						computer ++;
						messageStart.innerHTML = "L'ordinateur gagne!\nIl avait choisi " + computer_attempt;
						messageStart.style.color = "red"
						computerResp.style.visibility ="visible"
						computerResp.innerHTML = computer_attempt
					}
				}	
				else
				{
					messageStart.innerHTML = "C'est fini Ordinateur: " + computer + " - Joueur " +player;
					messageStart.style.color = "purple"
					var startGame = document.getElementById("start")
					startGame.style.visibility = "visible";
					setTimeout(function(){location.reload()}, 3000)
				}
			})	
		})
	}
	play();


