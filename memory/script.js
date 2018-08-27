
var getCards = Array.from(document.getElementsByClassName("card"));
var createCards = ["😃", "😎","😇","❤️","😢","😱","😳","😍", "🤪","🤢","💀","⚽️","👿","😈","🤖","🤡","👽", "😃", "😎","😇","❤️","😢","😱","😳","😍", "🤪","🤢","💀","⚽️","👿","😈","🤖","🤡","👽","💩"]

var compared = ""

var counter = 1


getCards.forEach(function(card){
	

	var randomCard = createCards[Math.floor(Math.random() * createCards.length)]

	var cardIndex = createCards.indexOf(randomCard);
	var remove = createCards.splice(cardIndex, 1);

	card.innerHTML = randomCard

	card.addEventListener('click', reveal)


 	function reveal(){
		
		var countClick = document.getElementById("clicks").innerHTML = "Nombre de clicks: " + counter
		counter++;
		card.style.color = "red";
		card.style.backgroundColor = "#fff";
		var firstCard = compared
		if(card.innerHTML === "💩"){
				card.style.color = "red";
				card.style.backgroundColor = "#fff";
				setTimeout(function(){
					var tag = document.getElementById("bigPoo")
					tag.style.visibility = "visible"
					var hideCards = document.getElementById("mainCards")
					hideCards.style.visibility = "hidden"
					
				}, 0);

				setTimeout(function(){
						location.reload();
					}, 2000);
		}
		else if(compared != card.innerHTML){
			setTimeout(function()
				{ card.style.color = "transparent"
					card.style.backgroundColor = "grey";
				}, 500
			)
		compared = card.innerHTML
		secondCard = compared
		}
		
	}
})