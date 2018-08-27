var startBtn = document.getElementById("start")
var showGame = document.getElementById("game")
var player = 0;
var computer = 0;

startBtn.addEventListener('click', game);

function game(){
	showGame.style.visibility = "visible"
	startBtn.style.visibility = "hidden"

	var messageStart = document.getElementById("messageStart")
	messageStart.innerHTML = "Clique sur un bouton pour affronter l'ordinateur!"
	
	play();
};


Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
var buttons = Array.from(document.getElementsByClassName("game"));

	function play(){
		buttons.forEach(function(btn){
			btn.addEventListener('click', function(){
				var computer_attempt = ["pierre", "feuille", "ciseaux"].sample();
				var player_attempt = btn.innerHTML 
				
				if((computer || player) < 3){

					if(player_attempt === computer_attempt){
						messageStart.innerHTML ="Pas de gagnant";
						messageStart.style.color = "orange"
						player += 0;
						computer += 0;
						console.log("Je suis dans la première boucle")
						console.log("player " + player)
						console.log("computer " + computer)
					}
					else if((player_attempt === "pierre") && (computer_attempt === "ciseaux")|| 
					(player_attempt === "feuille") && (computer_attempt === "pierre") ||
					(player_attempt === "ciseaux") && (computer_attempt === "feuille")){
						player ++;
						messageStart.innerHTML = "Bravo tu gagnes!\nL'ordinateur avait choisi " + computer_attempt  + " ton score est de " + player;
						messageStart.style.color = "green"
						console.log("Je suis dans la deuxième boucle")
						console.log("player " + player)
						
					}
					else if((computer_attempt === "pierre") && (player_attempt === "ciseaux")|| 
					(computer_attempt === "feuille") && (player_attempt === "pierre") ||
					(computer_attempt === "ciseaux") && (player_attempt === "feuille")){
						computer ++;
						messageStart.innerHTML = "L'ordinateur gagne!\nIl avait choisi " + computer_attempt;
						messageStart.style.color = "red"
						console.log("Je suis dans la troisième boucle")

						console.log("computer " + computer)
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


