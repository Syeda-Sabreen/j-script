function validation(){

let name = document.getElementById('name').value
let email = document.getElementById('email').value
let number = document.getElementById('number').value
let password = document.getElementById('password').value



if (name == "") {
    document.getElementById('userName').innerHTML = "Please Enter User Name"
    
}
if(email == ""){
    document.getElementById('eMail').innerHTML = "Please Enter Email"
}
if(email == ""){
    document.getElementById('eMail').innerHTML = "Please Enter Email"
}
if(password == ""){
    document.getElementById('pass').innerHTML = "Please Enter password"
}
else if(password.length < 3){
    document.getElementById('pass').innerHTML="must include minimum of 4 chars"
}
else if(password.type="number"){
    document.getElementById('pass').innerHTML="must include alphanumeric charecters"
}

if(number == ""){
    document.getElementById('Num').innerHTML = "Please Enter number"
}
else if(number.length < 10){
    document.getElementById('Num').innerHTML = "please enter 10 digit mobile number"
}
else if(number.length > 10){
    document.getElementById('Num').innerHTML = "please enter 10 digit mobile number"
}
return false;
}
