(function($) {
    $.fn.passwordStrengthChecker = function(options) {
        $("#passwordInput").focus()

        let settings = $.extend({
            overlay: 'rgba(0, 0, 0, 0.5)',
            closeButton: {
                src: null,
                width: "40px",
                height: "40px"
            },
        }, options)

        return this.each(function() {
            let modalOverlay;
            let closeButton;
            setModalOverlayProperties();
            closeButtonProperties();
            showHidePassword();           
            verify();
            clear();
            
            function verify() {
                $("#verify").click( (evt) => {
                    evt.preventDefault();
                    verification();
                });
            };
            
            function clear() {
                $("#clear").click( (evt) => {
                    evt.preventDefault();
                    $("#passwordInput").val("");
                    $("#passwordInput").focus();
                    $("#strength").html("");
                    $("#progress").removeClass();
                    $("#images").prop("checked",false)
                    closeButtonProperties();

                });
            };
            
            function showHidePassword() {
                $("#showPassword").click( () => {
                    let password = $("#passwordInput");  
                    let passwordType = password.attr("type");
                    if(password.val() != ''){
                        if(passwordType == "password"){  
                            password.attr("type", "text");  
                            $("#showPassword").text("Hide Password");  
                        }else{  
                            password.attr("type", "password");  
                            $("#showPassword").text("Show Password");  
                        };
                    }else{
                        alert("Please Enter Password");
                    };
                });
            };

            function verification(){
                let password = $("#passwordInput").val();
                let strength = 0;
                $("#strength").removeClass();  
                $("#progress").removeClass().addClass("progress-bar");   
                if(password == ""){
                    $("#strength").html("");  
                }else if(password.length <6){
                    $("#strength").html("");
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-25").addClass("bg-danger");
                    $("#strength").addClass("short");
                    $("#strength").html("I'm sorry but your password is too short. It's almost like you want to get hacked..."); 
                    
                    checkForImageRequest(); 
                }else{
                    strengthVerification(password,strength);   
                }
            };

            function strengthVerification(password,strength){      
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
                if(password.length >=6 && password.length <= 10){
                    strength += 1;
                }
                if(password.length > 10){
                    strength += 1;
                }
                                
                strengthCheck(strength);
            };

            function strengthCheck(strength){
                if(strength < 3){
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-50").addClass("bg-warning");
                    $("#strength").addClass("weak");
                    $("#strength").html("Do you work for the NL Health System? Because your password is WEAK!");
                }else if(strength == 3 || strength == 4){
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-75").addClass("bg-primary");
                    $("#strength").addClass("good");
                    $("#strength").html("Your password is good. But there is still room for improvement!");
                }else{
                    $("#progress").removeClass().addClass("progress-bar").addClass("w-100").addClass("bg-success");
                    $("#strength").addClass("strong");
                    $("#strength").html("Your password is strong. You should be proud!");
                }
                checkForImageRequest();
            };
            
            function checkForImageRequest(){
                if ($("#images").is(":checked")){
                    setUpImage();
                }
            };

            function setUpImage(){
                let strengthImage = new Image();
                strengthImage.src = null;
                if($("#strength").hasClass("short")){
                    strengthImage.src=`images/TooShort.png`;
                }else if($("#strength").hasClass("weak")){
                    strengthImage.src=`images/Weak.jpg`;
                }else if($("#strength").hasClass("good")){
                    strengthImage.src=`images/Good.png`;
                }else if($("#strength").hasClass("strong")){
                    strengthImage.src=`images/Strong.jpg`;
                }
                modalOverlay.css({opacity:0.1}).show().animate({opacity:1});
                modalOverlay.append(`<img src=${strengthImage.src}>`);
            };
            
            function setModalOverlayProperties(){
                modalOverlay = $('<div></div>');
                modalOverlay.css({
                    "background" : settings.overlay,
                    "position" : "absolute",
                    "top" : "0px",
                    "left" : "0px",
                    "display" : "none",
                    "text-align" : "center",
                    "width" : "100%",
                    "height" : "100%",
                    "padding-top" : "13%",
                    "padding-right": "10%"
                });
                $("body").append(modalOverlay);
            };

            function closeButtonProperties(){
                let symbol = {
                    "color": "white",
                    "cursor": "pointer",
                    "font-size": "20px",
                    "width": settings.closeButton.width,
                    "height": settings.closeButton.height,
                    "position": "absolute",
                    "top": "5px",
                    "right": "5px",
                    "border": "0px",
                    "z-index": "1"
                }
                closeButton = $("<span>X</span>");
                closeButton.css(symbol);
                modalOverlay.append(closeButton);
                closeButton.click(function() {
                    modalOverlay.animate({opacity: 0.1}, function() {
                        modalOverlay.html("");
                        modalOverlay.hide();
                    })
                });
            };
        });                 
    };    
}(jQuery));