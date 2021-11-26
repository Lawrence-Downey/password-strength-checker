"use strict"

function submit() {
    $("#submit").click( (event) => {
        $("#passwordInput").passwordStrengthChecker();
        event.preventDefault();
    })
}

function clear() {
    $("#clear").click( () => {
        $("#passwordInput").val( "" );
    });
}

$(document).ready(() => {
    
    $("#passwordInput").focus();
    submit();
    clear();
    $("#passwordInput").passwordStrengthChecker().showHidePassword()
    $("#passwordInput").passwordStrengthChecker().passwordInput();
    let password = $("#passwordInput").val();
    passwordStrengthChecker().strengthCheck(password);
    
    
      
    
})