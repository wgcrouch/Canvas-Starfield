<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>jsSnake</title>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
        <script src="starfield.js"></script>
        <script>

			var context;
			
			$(document).ready(function() {

				context = document.getElementById('field').getContext("2d");
							
				starfield = new Starfield({
					context : context
				});

				starfield.clear();

				interval = setInterval(starfield.update,10);


			});

		</script>
    </head>
    <body>
        <canvas id="field" width="800px" height="800px"></canvas>

    </body>
</html>