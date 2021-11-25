"use strict"

$(document).ready(() => {
    
    $("#passwordInput").focus();

    $("submit").click( (event) => {
        $("#passwordInput").passwordStrengthChecker();
        event.preventDefault();
    })

    $("#clear").click( () => {
        $("#passwordInput").val( "" );
    });

    
      
    
})