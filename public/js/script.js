function handleClick(){

    const listening = $("#listening");
    const reading = $("#reading");
    const writing = $("#writing");
    const speaking = $("#speaking");

    

    $(document).click(function (event) {
        var text = $(event.target).text();

        event.preventDefault();

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

            default:
                null;
        }
   })

}


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

 