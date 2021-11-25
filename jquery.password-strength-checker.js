(function($) {
    $.fn.passwordStrengthChecker = function() {
        return this.each(function(){
            let hideShowPassword = function(){
                $('#show_password').click( () => {  
                    let password = $('#password');  
                    let passwordType = password.attr('type');
                    if(password.val() != '')
                    {
                    if(passwordType == 'password')  
                    {  
                    password.attr('type', 'text');  
                    $(this).text('Hide Password');  
                    }  
                    else  
                    {  
                    password.attr('type', 'password');  
                    $(this).text('Show Password');  
                    }
                    }
                    else
                    {
                    alert("Please Enter Password");
                    }
                });
                return hideShowPassword;  
            };
            
            
        });
    };    
}(jQuery));