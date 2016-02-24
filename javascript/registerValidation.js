
function nullCheck(txt){
    if(txt.value===""){
        txt.style.borderColor= "#F00";
    }
    else txt.style.borderColor= "#FFF";
} 
function register(){
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    var phoneno = document.getElementById("phoneNumber");
    
    
      return (validatePasswordMatch(pwd1,pwd2)&&validatePhonenumber(phoneno));
}
function validatePhonenumber(number)  
{  
    var phoneRe = /[0-9]/g;
  if(number.value.match(phoneRe) !== null){
    return true;
  }
  else {
    number.value = "";
    number.placeholder = "Invalid Phone Number"
    number.style.borderColor = "#F00";
  }
} 
function  validatePasswordMatch(pwd1,pwd2){
    var regularExpression =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(pwd1.value != pwd2.value){
        pwd1.style.borderColor = "#F00";
        pwd1.value = "";
        pwd1.placeholder = "Password Mismatch"
        pwd2.value = "";
        pwd2.placeholder = "Password Mismatch"
        pwd2.style.borderColor = "#F00";
        return false;
    }  
    else if(pwd1.value.match(regularExpression) === null){
        pwd1.style.borderColor = "#F00";
        pwd1.value = "";
        pwd1.placeholder = "Invalid Password"
        pwd2.value = "";
        pwd2.placeholder = "Invalid Password"
        pwd2.style.borderColor = "#F00";
        return false;
    } 
    else return true;
} 