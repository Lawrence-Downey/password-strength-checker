(function($) {
    $.fn.passwordStrengthChecker = function() {
        
        return this.each(function() {
            showHidePassword();
            verify();

            function verify() {
                $("#submit").click( (evt) => {
                    evt.preventDefault();
                    passwordInput();
                    strengthCheck();
                });
            };
            
            function showHidePassword() {
                $("#showPassword").click( () => {
                    let password = $("#passwordInput");  
                    let passwordType = password.attr("type");
                    if(password.val() != ''){
                        if(passwordType == "password"){  
                            password.attr("type", "text");  
                            $(this).text("Hide Password");  
                        }else{  
                            password.attr("type", "password");  
                            $(this).text("Show Password");  
                        };
                    }else{
                        alert("Please Enter Password");
                    };
                });
            };

            function passwordInput(){
                let password = $("#passwordInput").val();
                if(password == ""){
                    $("#strength").html("");
                }
                else{
                    let meter = strengthCheck(password);
                    $("#strength").html(meter);
                }
            };

            function strengthCheck(password){
                let strength = 0;
                if(password.length <6){
                    $("#progress").addClass("w-25").addClass("bg-danger");
                    $("#strength").addClass("short");
                    return "I'm sorry but your password is too short. It's almost like you want to get hacked...";
                }
                if(password.match(/(.*[A-Za-z])/)){
                    strength += 1;
                }
                if(password.match(/([a-zA-Z])/) && password.match(/([0-9])/)){
                    strength +=1;
                }
                if(password.match(/([~,!,@,#,$,%,^,&,*,_])/)){
                    strength +=1;
                }
                if(password.match(/(.*[~,!,@,#,$,%,^,&,*,_].*[~,!,@,#,$,%,^,&,*,_])/)){
                    strength +=1;
                }
                if(password.length >=7 && password.length <= 10){
                    strength += 1;
                }
                if(password.length > 10){
                    strength += 1;
                }
                if(strength < 3){
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-50").addClass("bg-warning");
                    $("#strength").addClass("weak");
                    return "Your password is weak. You should probably rethink it!";
                }else if(strength == 3 || strength == 4){
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-75").addClass("bg-primary");
                    $("#strength").addClass("good");
                    return "Your password is good. But there is still room for improvement!";
                }else{
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-100").addClass("bg-success");
                    $("#strength").addClass("strong");
                    return "Your password is strong. You should be proud!";
                };
            };
        });                 
    };    
}(jQuery));