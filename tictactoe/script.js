var checkbox = document.getElementById("checkbox")
var player = "x" 
var computer = "o"
var myKases = Array.from(document.getElementsByClassName("case"));
var kase_1 = document.getElementById("1")
var kase_2 = document.getElementById("2")
var kase_3 = document.getElementById("3")
var kase_4 = document.getElementById("4")
var kase_5 = document.getElementById("5")
var kase_6 = document.getElementById("6")
var kase_7 = document.getElementById("7")
var kase_8 = document.getElementById("8")
var kase_9 = document.getElementById("9")
var message = document.getElementById("message")

function f_randomKase(){
	return myKases[Math.floor(Math.random() * myKases.length)]
}

checkbox.addEventListener('click', changeLetter)

function changeLetter(){
	if(checkbox.checked === false){
		player = "o"
		computer = "x"
	}
}

myKases.forEach(function(kase){
	kase.addEventListener('click', play)	
		function play(){
			playerTurn();
			if(win() != true){
				//
				computerTurn()
			}
		}
		
	function playerTurn(){
		if((kase.innerHTML.trim() === "") && (kase.innerHTML.trim() != computer) && (kase.innerHTML.trim() != player)){
			kase.innerHTML = player	
			var index = myKases.indexOf(kase)
			myKases.splice(index, 1)
			win();
		}
		else
		{
			kase.style.backgroundColor = "red"
		}
	}

	function computerTurn(){
		setTimeout(function(){
			var randomKase = f_randomKase();
			if((randomKase.innerHTML.trim() === "") && ((randomKase.innerHTML.trim() != player) && (randomKase.innerHTML.trim() != computer))){
				randomKase.innerHTML = computer	
				var index = myKases.indexOf(randomKase)
				myKases.splice(index, 1)
				win();
			}
			else{
				var newRand = f_randomKase()
				newRand.innerHTML = computer
				win();
			}
		}, 500)
	}

	function win(){
		if((kase_1.innerHTML.trim() === player ) && (kase_2.innerHTML.trim() === player) && (kase_3.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_2.style.backgroundColor = "pink"
				kase_3.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true

		}
		else if((kase_4.innerHTML.trim() === player) && (kase_5.innerHTML.trim() === player) && (kase_6.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_7.innerHTML.trim() === player) && (kase_8.innerHTML.trim() === player) && (kase_9.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true

		}
		else if((kase_1.innerHTML.trim() === player) && (kase_4.innerHTML.trim() === player) && (kase_7.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_4.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_2.innerHTML.trim() === player) && (kase_5.innerHTML.trim() === player) && (kase_8.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_8.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_3.innerHTML.trim() === player) && (kase_6.innerHTML.trim() === player) && (kase_9.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_6.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_1.innerHTML.trim() === player) && (kase_5.innerHTML.trim() === player) && (kase_9.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_9.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_3.innerHTML.trim() === player) && (kase_5.innerHTML.trim() === player) && (kase_7.innerHTML.trim() === player)){
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "pink"
				kase_5.style.backgroundColor = "pink"
				kase_7.style.backgroundColor = "pink"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Bravo, tu gagnes cette partie!"
			return true
		}
		else if((kase_1.innerHTML.trim() === computer) && (kase_2.innerHTML.trim() === computer) && (kase_3.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_2.style.backgroundColor = "#fff"
				kase_3.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_2.style.backgroundColor = "blue"
				kase_3.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true

		}
		else if((kase_4.innerHTML.trim() === computer) && (kase_5.innerHTML.trim() === computer) && (kase_6.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_4.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_4.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}
		else if((kase_7.innerHTML.trim() === computer) && (kase_8.innerHTML.trim() === computer) && (kase_9.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_7.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_7.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true

		}
		else if((kase_1.innerHTML.trim() === computer) && (kase_4.innerHTML.trim() === computer) && (kase_7.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_4.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_4.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}
		else if((kase_2.innerHTML.trim() === computer) && (kase_5.innerHTML.trim() === computer) && (kase_8.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_2.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_8.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_2.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_8.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}
		else if((kase_3.innerHTML.trim() === computer) && (kase_6.innerHTML.trim() === computer) && (kase_9.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_6.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_6.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}
		else if((kase_1.innerHTML.trim() === computer) && (kase_5.innerHTML.trim() === computer) && (kase_9.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_1.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_9.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_1.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_9.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}
		else if((kase_3.innerHTML.trim() === computer) && (kase_5.innerHTML.trim() === computer) && (kase_7.innerHTML.trim() === computer)){
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 0);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 1000);
			setTimeout(function(){
				kase_3.style.backgroundColor = "#fff"
				kase_5.style.backgroundColor = "#fff"
				kase_7.style.backgroundColor = "#fff"}, 1500);
			setTimeout(function(){
				kase_3.style.backgroundColor = "blue"
				kase_5.style.backgroundColor = "blue"
				kase_7.style.backgroundColor = "blue"}, 2000);
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "L'ordinateur gagne cette partie!"
			return true
		}

		else if(myKases.length === 0){
			setTimeout(function(){
				location.reload()
			}, 3500);
			message.innerHTML = "Personne ne gagne cette partie!"
		}
	}
})

