"use strict"





$(document).ready(() => {
    
   
    
    $("#verify").passwordStrengthChecker().verify();
    passwordStrengthChecker().clear();

    $("#passwordInput").passwordStrengthChecker().showHidePassword();
    $("#passwordInput").passwordStrengthChecker().passwordInput();
    passwordStrengthChecker().strengthCheck();
    


    
      
    
})