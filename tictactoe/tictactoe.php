<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 	<link rel="stylesheet" href="styles.css" type="text/css">

    <title>TicTacToe</title>
  </head>

  <body>
    <?php include('../menu.php'); ?> 

  	<div class="container">
  		<h1 id="myTitle">Tic Tac Toe</h1>

  		<p>Choisis entre  x et o </p>
  		<label class="switch">
  		  <input type="checkbox" checked id="checkbox">
  		  <span class="slider round"></span>
  		  <span class="absolute-no">o</span>
  		</label>

      <h2 id="message"></h2>

  		<div class="row">
  			<div class="col-xs-4">
  				<div class="case" id="1">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="2">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="3">
  				</div>
  				
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-xs-4">
  				<div class="case" id="4">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="5">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="6">
  				</div>
  				
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-xs-4">
  				<div class="case" id="7">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="8">
  				</div>
  				
  			</div>
  			<div class="col-xs-4">
  				<div class="case" id="9">
  				</div>
  				
  			</div>
  		</div>
  	</div>

		
	<script type="text/javascript" src="script.js"></script>
  </body>
</html>
	