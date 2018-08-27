<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 	<link rel="stylesheet" href="styles.css" type="text/css">

    <title>HangMan</title>
  </head>

  <body>
	<?php include('../menu.php'); ?> 
		<div class="container">
			<div class="row">
				<div class="col-xs-12 offset-md-2 col-md-8">
						<h1 id="myTitle">Hang Man - NetFlix</h1>
						<button class="btn btn-success" id="reload" onclick="refresh()">Restart</button>
						<div class="row">
							<div class="col-xs-12" id="keys"></div>
							<div class="col-xs-12" id="game">
								<h2 id="guessWord"></h2>
								<canvas id="stickman" width="400" height="400">This Text will show if the Browser does NOT support HTML5 Canvas tag</canvas>
							</div>
						</div>
				</div>	
			</div>	
		</div>
	<script type="text/javascript" src="script.js"></script>
  </body>
</html>
	