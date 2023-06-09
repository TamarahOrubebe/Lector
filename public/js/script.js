"use strict";

$("#listening-link").click(handleClick)
$("#reading-link").click(handleClick);
$("#writing-link").click(handleClick);
$("#speaking-link").click(handleClick);
$("#history-link").click(handleClick);
$("#reviewed-link").click(handleClick);
$("#subscription-link").click(handleClick);
$("#upload-link").click(handleClick);




function handleClick(event) {

    const listening = $("#listening");
    const reading = $("#reading");
    const writing = $("#writing");
    const speaking = $("#speaking");
    const history = $("#history");
    const reviewed = $("#reviewed");
    const subscription = $("#subscription");
    const upload = $("#upload");

    

    
        var text = $(event.target).text();

        switch (text) {
					case "Listening":
						listening.css("display") == "none"
							? listening.css("display", "block")
							: null;

						reading.css("display", "none");

						writing.css("display", "none");

						speaking.css("display", "none");
				
						break;

					case "Reading":
						reading.css("display", "block");

						listening.css("display", "none");

						writing.css("display", "none");

						speaking.css("display", "none");

						break;

					case "Writing":
						writing.css("display", "block");

						listening.css("display", "none");

						reading.css("display", "none");

						speaking.css("display", "none");

						break;

					case "Speaking":
						speaking.css("display", "block");

						listening.css("display", "none");

						reading.css("display", "none");

						writing.css("display", "none");

						break;

					case "History":
						history.css("display") == "none"
							? history.css("display", "block")
							: null;

						reviewed.css("display", "none");

						subscription.css("display", "none");

						upload.css("display", "none");

                        break;
            
                    case "Reviewed":
                        reviewed.css("display", "block");
                
                        history.css("display", "none");

                        subscription.css("display", "none");

                        upload.css("display", "none");

                        break;
            
					case "Subscription":
                        subscription.css("display", "block");
							
                        history.css("display", "none");
                
                        reviewed.css("display", "none");

						upload.css("display", "none");

                        break;
            
					case "Upload":
                        upload.css("display", "block");
							
                        history.css("display", "none");
                
						reviewed.css("display", "none");

						subscription.css("display", "none");

						break;

					default:
						null;
				}
   

	return false;

}

let isClicked = false;

$("#nav").click(() => {

	if (isClicked === false) {

		isClicked = true;

		$("nav").addClass("bg-light");
	
	} else {

		$("nav").removeClass("bg-light");
		isClicked = false;
	}
	
	

});

function toggleVisibility() {

    var x = $("#password");
    
    if (x.attr("type") == "password") x.attr("type", "text");
    else x.attr("type", "password");
   
    
}

function togglePasswordVisibility() {

    var x = $("#confirm-password");
    
    if (x.attr("type") == "password") x.attr("type", "text");
    else x.attr("type", "password");
   
    
}









