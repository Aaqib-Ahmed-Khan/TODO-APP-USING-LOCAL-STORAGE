var email=document.getElementById('email');
var password=document.getElementById('password');
var login_container=document.getElementById("login_container");
var home_container=document.getElementById("home_container");
function loginuser(){
    if(!email.value ||!password.value)
        return alert ("Please enter your email or password");
localStorage.setItem("email",email.value);
 }
function checkuserlogin(){
    var email=localstorage.getitem('email')
    if(email){
        login_container.style.display='none';
        home_container.style.display='block';
    }
    else{
        login_container.style.display='block';
        home_container.style.display='none';
 }
}
checkIsUserLogin();