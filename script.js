let signupbtn = document.getElementById("signupbtn");
let loginbtn = document.getElementById("loginbtn");

let loginh1  = document.querySelector(".login h1");
let loginp  = document.querySelector(".login p");

let signuph1  = document.querySelector(".signup h1");
let signupp  = document.querySelector(".signup p");

let firstname  = document.querySelector(".firstname");
let lastname  = document.querySelector(".lastname");

loginbtn.onclick = function(){
    signupbtn.style.backgroundColor= "#f8f8f8";
    signupbtn.style.color= "#000";
    loginbtn.style.backgroundColor= "#46d53b";
    loginbtn.style.color= "#fff";
   
}


signupbtn.onclick = function(){
    loginbtn.style.backgroundColor= "#f8f8f8";
    signupbtn.style.backgroundColor= "#46d53b";
    signupbtn.style.color= "#fff";
    loginbtn.style.color= "#000";
}


document.getElementById('email').addEventListener('input', function() {
    var emailInput = this.value;
    var errorMessage = document.getElementById('error-message');

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailInput)) {
        errorMessage.textContent = 'Please enter a valid email address.';
    } else {
        errorMessage.textContent = '';
    }
});


document.getElementById('firstname').addEventListener('input', function() {
    var firstname = this.value;
    var errorMessage = document.getElementById('error-message');

    var firstnameRegex =  /^[A-Za-z]+$/;

    if (!firstnameRegex.test(firstname)) {
        errorMessage.textContent = 'Please enter only alphabets.';
    } else {
        errorMessage.textContent = '';
    }
});
document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    var errorMessage = document.getElementById('error-message');

    var firstnameRegex =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!firstnameRegex.test(password)) {
        errorMessage.textContent = 'Please enter a strong password.';
    } else {
        errorMessage.textContent = '';
    }
});
document.getElementById('phonenumber').addEventListener('input', function() {
    var phonenumber = this.value;
    var errorMessage = document.getElementById('error-message');

    var phoneRegex = /^07\d{8}$/;

    if (!phoneRegex.test(phonenumber)) {
        errorMessage.textContent = 'Please enter a valid phone number .';
    } else {
        errorMessage.textContent = '';
    }
});
