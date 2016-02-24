window.onload= function(){
        if(localStorage.getItem('email')){
            document.getElementById("login").style.display = 'none'; 
            var mail = localStorage.getItem('email'); 
            var splitEmail = mail.split('@');
            document.getElementById("user").innerHTML= "hi "+splitEmail[0];
        }	
	}
	
	function login(){
		var email = document.getElementById("loginEmail");
		var pwd = document.getElementById("loginpwd");
		if(validateEmail(email)&&validatePassword(pwd)){
			localStorage.setItem('email', email.value);
    		// window.location="~/index.html";
            // location.replace(document.referrer);
            // window.history.go(-2);
            // location.reload(true);
            window.location = document.referrer;
            indow.location = document.referrer;
            location.reload(true);
		}
    }

    function validateEmail(mail){
    	var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	if(mail.value.match(regularExpression) === null){
	        mail.style.borderColor = "#F00";
	        mail.value = "";
	        mail.placeholder = "Invalid Email";
	        return false;
    	} 
    	else{
    		mail.style.borderColor = "#333";
    		return true;
    	}
    }
    function validatePassword(pwd){
    	if(pwd.value.length<6){
    		pwd.style.borderColor = "#F00";
        	pwd.value = "";
        	pwd.placeholder = "Minimum 6 characters required"
        	return false;
    	}
    	else{
    		pwd.style.borderColor = "#333";
    		return true;
    	} 
    }
    function logout(){
        localStorage.removeItem('email');
        location.reload(true);
    }