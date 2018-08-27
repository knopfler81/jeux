<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Chifoumi</title>
  </head>

  <body>
		<?php include('../menu.php'); ?> 
		<div class="container">
			<h1 id="myTitle">Chifoumi</h1>
			<div class="row">
				<button id="start" class="btn btn-primary">
					Commencer le jeu
				</button><br>
				<div class="col-sm-12 hidden" id="game">
					<h2 id="messageStart"></h2>
					<button class="game btn btn-primary">pierre</button> 
					<button class="game btn btn-primary">feuille</button> 
					<button class="game btn btn-primary">ciseaux</button>
				</div>
			</div>
		</div>

		
	<script type="text/javascript" src="script.js"></script>
  </body>
</html>
	