"use strict"

$(document).ready(() => {

    $("button").click( (event) => {
        $("#passwordInput").passwordStrengthChecker();
        event.preventDefault();
    })
    
})