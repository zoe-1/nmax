

$( document ).ready(function() {
	    console.log( "ready!" );

	// Event setup using a convenience method
	$( "#menu_button" ).click(function() {
		    console.log( "You clicked a mybutton!" );


				 $( "#menu_button" ).animate( { 
					 "opacity":0.25, "left":"+=250" 
				 }, 5000, function() {
							     // Animation complete.
									 console.log("completed");
				 });
			
				// JSON JavaScript Object Notation.
				var mydata = { "name":"This is my new value.", "description":"This is my description." }

				console.log(mydata.description);
	});

});
