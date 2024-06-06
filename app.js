var email=document.getElementById('email');
var password=document.getElementById('password');
var login_container=document.getElementById("login_container");
var home_container=document.getElementById("home_container");
var user_email=document.getElementById("user_email");
function loginUser(){
    if(!email.value ||!password.value)
        return alert ("Please enter your email or password");
localStorage.setItem("email",email.value);
checkIsUserLoggedin()
 }
function checkIsUserLoggedin(){
    var email=localStorage.getItem("email")
    if(email){
        login_container.style.display="none";
        home_container.style.display="block";
        user_email.innerText=email;
    }
    else{
        login_container.style.display="block";
        home_container.style.display="none";
 }
}
checkIsUserLoggedin();
function logout(){
    localStorage.removeItem("email");
    checkIsUserLoggedin()
}